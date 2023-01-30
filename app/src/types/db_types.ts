export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          createdAt: string;
          email: string;
          id: number;
          password: string | null;
        };
        Insert: {
          createdAt?: string;
          email?: string;
          id?: number;
          password?: string | null;
        };
        Update: {
          createdAt?: string;
          email?: string;
          id?: number;
          password?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
