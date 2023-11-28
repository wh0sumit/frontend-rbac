declare interface UserType {
  name: string;
  age: number;
  state?: string;
  country?: string;
  city: string;
  role: string;
}

declare interface UserPermissionType {
  permissions: string[];
}
