function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center py-12">
      <div className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 font-tertiary text-sm font-bold uppercase tracking-widest text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <span className="h-2 w-2 rounded-full bg-background animate-ping" />
        LOADING...
      </div>
    </div>
  );
}

export default Loading;
