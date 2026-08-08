import { initializeApp, getApp, getApps } from "firebase/app";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcacivC5B8J11mEf9S3bbfqQp8ZsuRVGg",
  authDomain: "my-portfolio-d5edb.firebaseapp.com",
  databaseURL: "https://my-portfolio-d5edb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-d5edb",
  storageBucket: "my-portfolio-d5edb.firebasestorage.app",
  messagingSenderId: "931386512042",
  appId: "1:931386512042:web:5b33a47172839f5b22f6d3",
  measurementId: "G-GH6RJQD63M",
};

// Initialize Firebase App singleton
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analyticsInstance: Analytics | null = null;
let analyticsPromise: Promise<Analytics | null> | null = null;

/**
 * Safely initializes Firebase Analytics after verifying browser support.
 * Dynamically imports firebase/analytics to allow code-splitting.
 * Automatically disables analytics data collection during development (npm run dev)
 * while enabling it for preview and production builds.
 */
export async function initAnalytics(): Promise<Analytics | null> {
  if (analyticsInstance) return analyticsInstance;

  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      try {
        const { getAnalytics, isSupported, setAnalyticsCollectionEnabled } = await import("firebase/analytics");
        const supported = await isSupported();
        if (supported && typeof window !== "undefined") {
          analyticsInstance = getAnalytics(app);

          // Disable analytics in dev (npm run dev), enable in preview/production build
          const isDev = import.meta.env.DEV;
          setAnalyticsCollectionEnabled(analyticsInstance, !isDev);

          if (isDev) {
            console.log("[Firebase Analytics] Disabled in development mode.");
          }

          return analyticsInstance;
        }
      } catch (err) {
        console.warn("Firebase Analytics is not supported in this environment:", err);
      }
      return null;
    })();
  }

  return analyticsPromise;
}

/**
 * Helper to log custom Firebase Analytics events dynamically.
 */
export async function logAnalyticsEvent(eventName: string, eventParams?: Record<string, any>) {
  const analytics = await initAnalytics();
  if (analytics) {
    const { logEvent } = await import("firebase/analytics");
    logEvent(analytics, eventName, eventParams);
  }
}

/**
 * Log a section view event when the user navigates or scrolls to a portfolio section.
 */
export async function logSectionView(sectionId: string) {
  await logAnalyticsEvent("page_view", {
    page_title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1),
    page_location: `${window.location.origin}/#${sectionId}`,
    page_path: `/#${sectionId}`,
  });
  await logAnalyticsEvent("section_view", {
    section_id: sectionId,
  });
}

/**
 * Log when a user clicks on a project link (Live Demo or GitHub).
 */
export async function logProjectClick(projectName: string, linkType: "demo" | "github") {
  await logAnalyticsEvent("project_click", {
    project_name: projectName,
    link_type: linkType,
  });
}

/**
 * Log when a user interacts with your Resume / CV.
 */
export async function logResumeClick(actionType: "view" | "download" = "view") {
  await logAnalyticsEvent("resume_action", {
    action_type: actionType,
  });
}

/**
 * Log when a user clicks a social media profile link.
 */
export async function logSocialClick(platform: string) {
  await logAnalyticsEvent("social_click", {
    platform,
  });
}

/**
 * Log contact form interactions.
 */
export async function logContactSubmit(status: "success" | "error") {
  await logAnalyticsEvent("contact_submit", {
    submission_status: status,
  });
}
