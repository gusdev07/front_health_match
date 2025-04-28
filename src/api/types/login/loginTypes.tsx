export interface ILoginResponse {
  user: {
    id: number;
    username: string;
    email: string;
    role: {
      id: number;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      permissions: [
        {
          id: number;
          roleId: number;
          tableName: string;
          canRead: boolean;
          canWrite: boolean;
          canUpdate: boolean;
          canDelete: boolean;
          createdAt: string;
          updatedAt: string;
        },
      ];
    };
    permissions: [
      {
        id: number;
        roleId: number;
        tableName: string;
        canRead: boolean;
        canWrite: boolean;
        canUpdate: boolean;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
      },
    ];
  };
  accessToken: string;
  refreshToken: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  username: string;
  email: string;
  role: {
    id: number;
  };
}
