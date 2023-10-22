interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Park Manager'],
  customerRoles: [],
  tenantRoles: ['Park Owner', 'Park Manager'],
  tenantName: 'Park',
  applicationName: 'FMDM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage park information',
    'Edit personal information',
    'Manage user information',
    'Create new parks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2642f305-7b8f-4c7f-958b-72edde9bca7c',
};
