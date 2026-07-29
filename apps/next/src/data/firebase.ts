import type { Query } from "firebase/database";

export const getFirebaseData = async <TResponse>(
  sourcePath: string,
  code?: string,
): Promise<TResponse | undefined> => {
  const { firebaseDB, firebaseRef, firebaseGet } =
    await import("@/lib/firebase");
  const sourceRef = firebaseRef(firebaseDB, sourcePath);
  let targetRef: Query = sourceRef;

  if (typeof code === "string") {
    const { equalTo, limitToFirst, orderByChild, query } =
      await import("firebase/database");
    targetRef = query(
      sourceRef,
      orderByChild("code"),
      equalTo(code),
      limitToFirst(1),
    );
  }

  const snapshot = await firebaseGet(targetRef);

  if (!snapshot.exists()) {
    if (typeof code === "string") return undefined;
    throw new Error(`[Firebase Error] source: ${sourcePath}`);
  }

  const data: unknown = snapshot.val();

  if (typeof code !== "string") return data as TResponse;
  if (typeof data !== "object" || data === null) {
    throw new Error(`[Firebase Error] source: ${sourcePath}`);
  }

  return Object.values(data)[0] as TResponse | undefined;
};
