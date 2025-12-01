export type LoanStatus = "requested" | "approved" | "returned" | "overdue";

export interface LoanRecord {
  id: string;
  userId: string;
  bookId: string;
  status: LoanStatus;
}

export const isOverdue = (status: LoanStatus) => status === "overdue";

