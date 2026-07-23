// ================================================
// AMAZIMA CHAPEL HUB - TYPE DEFINITIONS
// ================================================

export type UserRole = 'admin' | 'group_leader' | 'student';
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';
export type ApplicationStatus = 'pending' | 'approved' | 'declined';
export type FeedbackStatus = 'open' | 'in_progress' | 'resolved' | 'closed';
export type AnnouncementPriority = 'low' | 'normal' | 'high' | 'urgent';
export type EventType = 'service' | 'prayer_meeting' | 'choir_rehearsal' | 'youth_fellowship' | 'special' | 'other';
export type NotificationType = 'announcement' | 'attendance' | 'application' | 'event' | 'song' | 'prayer_response' | 'feedback_reply' | 'group_assignment' | 'system';

export interface Profile { id: string; user_id: string; first_name: string; last_name: string; email: string; role: UserRole; class?: string; house?: string; avatar_url?: string; phone?: string; bio?: string; notification_email: boolean; notification_in_app: boolean; theme: string; is_active: boolean; last_login?: string; created_at: string; updated_at: string; }

export interface Group { id: string; name: string; description?: string; leader_id?: string; max_members: number; is_active: boolean; created_at: string; updated_at: string; }
export interface GroupMember { id: string; group_id: string; student_id: string; joined_at: string; }
export interface Attendance { id: string; student_id: string; marked_by: string; date: string; status: AttendanceStatus; notes?: string; service_type: EventType; created_at: string; updated_at: string; }
export interface Ministry { id: string; name: string; category: string; description?: string; is_active: boolean; created_at: string; updated_at: string; }
export interface MinistryApplication { id: string; student_id: string; ministry_id: string; position: string; experience?: string; motivation?: string; status: ApplicationStatus; admin_comment?: string; reviewed_by?: string; reviewed_at?: string; created_at: string; updated_at: string; }
export interface Song { id: string; title: string; artist: string; lyrics: string; youtube_url?: string; notes?: string; song_key?: string; tempo?: number; week_start: string; week_end: string; created_by: string; created_at: string; updated_at: string; }
export interface Announcement { id: string; title: string; content: string; priority: AnnouncementPriority; is_pinned: boolean; target_group_id?: string; scheduled_at?: string; created_by: string; published: boolean; created_at: string; updated_at: string; }
export interface PrayerRequest { id: string; student_id?: string; request: string; is_anonymous: boolean; is_archived: boolean; admin_response?: string; responded_by?: string; responded_at?: string; created_at: string; updated_at: string; }
export interface Feedback { id: string; student_id?: string; type: 'suggestion' | 'idea' | 'complaint' | 'testimony'; message: string; is_anonymous: boolean; status: FeedbackStatus; admin_response?: string; responded_by?: string; responded_at?: string; created_at: string; updated_at: string; }
export interface Event { id: string; title: string; description?: string; event_type: EventType; start_time: string; end_time: string; location?: string; max_attendees?: number; created_by: string; is_published: boolean; created_at: string; updated_at: string; }
export interface EventRsvp { id: string; event_id: string; student_id: string; status: AttendanceStatus; created_at: string; updated_at: string; }
export interface Notification { id: string; user_id: string; type: NotificationType; title: string; message: string; link?: string; is_read: boolean; created_at: string; }
export interface AppSettings { school_name: string; academic_year: string; academic_term: string; group_size: number; registration_open: boolean; site_description: string; }