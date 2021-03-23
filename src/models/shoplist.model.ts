export default class ShoplistModel {
  id = 0;
  name = "";
  ownerId = 0;
  items = 0;
  maxPeople: number | null = null;
  transportMode: string | null = null;
  storeId: number | null = null;
  shoppingDate: Date | null = null;
  createdAt: Date | null = null;
  updatedAt: Date | null = null;
  owner: any = {};
  joiners: any = {};
}
