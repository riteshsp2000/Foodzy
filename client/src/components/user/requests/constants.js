// Arrays which show the required details for individual inputs in respective render functions

export const USER_FIELDS = [
  { label: 'Name', type: 'text', name: 'name', className: 'user-name' },
  {
    label: 'Contact Number',
    type: 'number',
    name: 'contactNumber',
    className: 'contact-number',
  },
  {
    label: 'Delivery Location',
    type: 'text',
    name: 'deliveryLocation',
    className: 'delivery-location',
  },
];

export const ITEM_FIELDS = [
  {
    label: 'Item Name',
    type: 'text',
    name: 'itemName',
    className: 'item-name',
  },
  {
    label: 'Restaurant Name',
    type: 'text',
    name: 'restaurant',
    className: 'restaurant',
  },
  {
    label: 'Item Quantity',
    type: 'number',
    name: 'itemQuantity',
    className: 'item-quantity',
  },
];
