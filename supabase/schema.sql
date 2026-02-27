-- ============================================
-- La Réserve - Restaurant Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Menu Categories
-- ============================================
CREATE TABLE menu_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Menu Items
-- ============================================
CREATE TABLE menu_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES menu_categories(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  video_url TEXT,
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  allergens TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Reviews
-- ============================================
CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  author_name TEXT NOT NULL,
  author_email TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  admin_reply TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Reservations
-- ============================================
CREATE TABLE reservations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_phone TEXT NOT NULL,
  party_size INTEGER NOT NULL CHECK (party_size >= 1),
  date DATE NOT NULL,
  time TIME NOT NULL,
  special_requests TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Gallery (Images & Videos)
-- ============================================
CREATE TABLE gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT,
  description TEXT,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Site Settings (Key-Value Store)
-- ============================================
CREATE TABLE site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Opening Hours
-- ============================================
CREATE TABLE opening_hours (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  open_time TIME,
  close_time TIME,
  is_closed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Events
-- ============================================
CREATE TABLE events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Row Level Security (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE opening_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Public read access for active content
CREATE POLICY "Public can view active categories" ON menu_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view available items" ON menu_items FOR SELECT USING (is_available = true);
CREATE POLICY "Public can view approved reviews" ON reviews FOR SELECT USING (is_approved = true);
CREATE POLICY "Public can insert reviews" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can view active gallery" ON gallery FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view site settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public can view opening hours" ON opening_hours FOR SELECT USING (true);
CREATE POLICY "Public can view active events" ON events FOR SELECT USING (is_active = true);

-- Admin full access (authenticated users)
CREATE POLICY "Admin full access categories" ON menu_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access items" ON menu_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access reviews" ON reviews FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access reservations" ON reservations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access gallery" ON gallery FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access hours" ON opening_hours FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access events" ON events FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- Updated_at trigger function
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_menu_categories_updated_at BEFORE UPDATE ON menu_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reservations_updated_at BEFORE UPDATE ON reservations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_opening_hours_updated_at BEFORE UPDATE ON opening_hours FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Seed Data: Opening Hours
-- ============================================
INSERT INTO opening_hours (day_of_week, open_time, close_time, is_closed) VALUES
  (0, NULL, NULL, true),           -- Dimanche - Fermé
  (1, '11:30', '22:00', false),    -- Lundi
  (2, '11:30', '22:00', false),    -- Mardi
  (3, '11:30', '22:00', false),    -- Mercredi
  (4, '11:30', '22:00', false),    -- Jeudi
  (5, '11:30', '23:00', false),    -- Vendredi
  (6, '11:30', '23:00', false);    -- Samedi

-- ============================================
-- Seed Data: Default Site Settings
-- ============================================
INSERT INTO site_settings (key, value) VALUES
  ('restaurant_name', '"La Réserve"'),
  ('tagline', '"Une expérience culinaire d''exception"'),
  ('description', '"Bienvenue à La Réserve, où chaque plat raconte une histoire et chaque visite devient un souvenir inoubliable."'),
  ('phone', '""'),
  ('email', '""'),
  ('address', '""'),
  ('google_maps_url', '"https://maps.app.goo.gl/hDddYVyKbs7ATkWW8"'),
  ('hero_video_url', '""'),
  ('about_video_url', '""'),
  ('instagram_url', '""'),
  ('facebook_url', '""'),
  ('tiktok_url', '""');

-- ============================================
-- Seed Data: Sample Menu Categories
-- ============================================
INSERT INTO menu_categories (name, description, sort_order) VALUES
  ('Entrées', 'Nos entrées raffinées pour éveiller vos papilles', 1),
  ('Plats Principaux', 'Des plats savoureux préparés avec passion', 2),
  ('Desserts', 'Une touche sucrée pour conclure en beauté', 3),
  ('Boissons', 'Vins, cocktails et boissons artisanales', 4);

-- ============================================
-- Storage Buckets (run separately in Supabase dashboard)
-- ============================================
-- Create buckets: 'menu-images', 'gallery', 'events'
-- Set them as public buckets for image serving
