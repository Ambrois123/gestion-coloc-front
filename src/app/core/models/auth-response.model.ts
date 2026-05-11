export interface AuthResponse {
  token: string;
  user: {
    user_id: number;
    user_name: string;
    user_email: string;
  };
}