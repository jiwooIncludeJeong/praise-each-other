export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          body: string | null
          created_at: string
          id: number
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          title?: string
          user_id?: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          title?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
