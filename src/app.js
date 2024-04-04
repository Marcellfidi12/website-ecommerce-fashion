document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      {id: 1,name: 'Sepatu Api', img: 'produk1.png', price: 3000000},
      {id: 2,name: 'Tas Mewah', img: 'produk2.png', price: 3000000},
      {id: 3,name: 'Jaket Kulit', img: 'produk3.png', price: 3000000},
      {id: 4,name: 'Gaun', img: 'produk4.png', price: 3000000},
      ]
  }));
  
  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem){
      const cartsItem = this.items.find((item) => item.id === newItem.id);
      
      if(!cartsItem){
        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id){
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        })
      }
      console.log(this.total);
    }
  });
});