// 导入 Supabase 客户端（无需下载，直接通过CDN引入）
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// 替换为你的 Supabase 项目信息！
const SUPABASE_URL = 'https://peiwtguokwhlnwzaydun.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlaXd0Z3Vva3dobG53emF5ZHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Mjk2NDQsImV4cCI6MjA3ODUwNTY0NH0.qzhFlb0RpEWh12VplV9ghb1ACAgZoNiZSZVKyZgZCcw';

// 创建客户端实例（全局可用）
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);