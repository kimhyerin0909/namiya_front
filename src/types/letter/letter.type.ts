export type LETTER_RESPONSE = {
  userId: number;
  request: {
    previousId: number;
    content: string;
    sendAt: Date;
  };
};
