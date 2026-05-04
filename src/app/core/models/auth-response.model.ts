export interface AuthResponse {
  token: string;
  user: {
    user_id: number;
    user_email: string;
  };
}