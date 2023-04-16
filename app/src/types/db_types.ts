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
      category: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      sent_feedback: {
        Row: {
          anonymous: boolean
          category_id: number
          created_at: string
          from_user_id: string
          id: number
          sticker_id: number
          text: string
          to_user_id: string | null
        }
        Insert: {
          anonymous: boolean
          category_id: number
          created_at?: string
          from_user_id: string
          id?: number
          sticker_id: number
          text: string
          to_user_id?: string | null
        }
        Update: {
          anonymous?: boolean
          category_id?: number
          created_at?: string
          from_user_id?: string
          id?: number
          sticker_id?: number
          text?: string
          to_user_id?: string | null
        }
      }
      sticker: {
        Row: {
          id: number
          imageUrl: string | null
        }
        Insert: {
          id?: number
          imageUrl?: string | null
        }
        Update: {
          id?: number
          imageUrl?: string | null
        }
      }
      user_profile: {
        Row: {
          age: number | null
          birthday: string | null
          code: string
          created_at: string | null
          id: string
          name: string
          nickname: string
          profileImageUrl: string | null
        }
        Insert: {
          age?: number | null
          birthday?: string | null
          code: string
          created_at?: string | null
          id: string
          name: string
          nickname: string
          profileImageUrl?: string | null
        }
        Update: {
          age?: number | null
          birthday?: string | null
          code?: string
          created_at?: string | null
          id?: string
          name?: string
          nickname?: string
          profileImageUrl?: string | null
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
