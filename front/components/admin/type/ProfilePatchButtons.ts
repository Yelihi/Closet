export type RefObjType = {
  childSaveButtonRef: HTMLButtonElement | null;
  childCencelButtonRef: HTMLButtonElement | null;
};

export type ProfilePatchButtons = {
  refObj: React.MutableRefObject<RefObjType>;
};
