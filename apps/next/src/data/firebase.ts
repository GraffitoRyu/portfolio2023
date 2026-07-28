export const getFirebaseData = async <TResponse>(
  sourcePath: string,
): Promise<TResponse> => {
  const { firebaseDB, firebaseRef, firebaseGet } =
    await import("@/lib/firebase");
  const snapshot = await firebaseGet(firebaseRef(firebaseDB, sourcePath));

  if (!snapshot.exists()) {
    throw new Error(`[Firebase Error] source: ${sourcePath}`);
  }

  return snapshot.val();
};
