export const resolvePageLoadChange = (
  state: Pick<PageLoadStateTypes, "currentPage" | "loaded">,
  nextPage: PageLoadStateTypes["changePageName"],
): Pick<PageLoadStateTypes, "currentPage" | "loaded"> =>
  state.currentPage === nextPage
    ? state
    : { currentPage: nextPage, loaded: true };
