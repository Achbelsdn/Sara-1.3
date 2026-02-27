export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      menu_categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      menu_items: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          description: string | null;
          price: number;
          image_url: string | null;
          video_url: string | null;
          is_available: boolean;
          is_featured: boolean;
          allergens: string[] | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          name: string;
          description?: string | null;
          price: number;
          image_url?: string | null;
          video_url?: string | null;
          is_available?: boolean;
          is_featured?: boolean;
          allergens?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          image_url?: string | null;
          video_url?: string | null;
          is_available?: boolean;
          is_featured?: boolean;
          allergens?: string[] | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          author_name: string;
          author_email: string | null;
          rating: number;
          comment: string;
          is_approved: boolean;
          admin_reply: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          author_name: string;
          author_email?: string | null;
          rating: number;
          comment: string;
          is_approved?: boolean;
          admin_reply?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          author_name?: string;
          author_email?: string | null;
          rating?: number;
          comment?: string;
          is_approved?: boolean;
          admin_reply?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      reservations: {
        Row: {
          id: string;
          guest_name: string;
          guest_email: string;
          guest_phone: string;
          party_size: number;
          date: string;
          time: string;
          special_requests: string | null;
          status: "pending" | "confirmed" | "cancelled" | "completed";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          guest_name: string;
          guest_email: string;
          guest_phone: string;
          party_size: number;
          date: string;
          time: string;
          special_requests?: string | null;
          status?: "pending" | "confirmed" | "cancelled" | "completed";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          guest_name?: string;
          guest_email?: string;
          guest_phone?: string;
          party_size?: number;
          date?: string;
          time?: string;
          special_requests?: string | null;
          status?: "pending" | "confirmed" | "cancelled" | "completed";
          created_at?: string;
          updated_at?: string;
        };
      };
      gallery: {
        Row: {
          id: string;
          title: string | null;
          description: string | null;
          media_url: string;
          media_type: "image" | "video";
          sort_order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title?: string | null;
          description?: string | null;
          media_url: string;
          media_type: "image" | "video";
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string | null;
          description?: string | null;
          media_url?: string;
          media_type?: "image" | "video";
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: Json;
          updated_at?: string;
        };
      };
      opening_hours: {
        Row: {
          id: string;
          day_of_week: number;
          open_time: string | null;
          close_time: string | null;
          is_closed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          day_of_week: number;
          open_time?: string | null;
          close_time?: string | null;
          is_closed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          day_of_week?: number;
          open_time?: string | null;
          close_time?: string | null;
          is_closed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          date: string;
          time: string | null;
          image_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          date: string;
          time?: string | null;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          date?: string;
          time?: string | null;
          image_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Convenience types
export type MenuCategory = Database["public"]["Tables"]["menu_categories"]["Row"];
export type MenuItem = Database["public"]["Tables"]["menu_items"]["Row"];
export type Review = Database["public"]["Tables"]["reviews"]["Row"];
export type Reservation = Database["public"]["Tables"]["reservations"]["Row"];
export type GalleryItem = Database["public"]["Tables"]["gallery"]["Row"];
export type SiteSetting = Database["public"]["Tables"]["site_settings"]["Row"];
export type OpeningHour = Database["public"]["Tables"]["opening_hours"]["Row"];
export type Event = Database["public"]["Tables"]["events"]["Row"];
