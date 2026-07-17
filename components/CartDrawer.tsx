"use client";

import React, { useState } from "react";
import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const { cartItems, removeFromCart, cartTotal } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Form State
  const [buyerName, setBuyerName] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Formatting for multiple items or just taking the first one
    // We'll format a list if there are multiple items
    const productsText = cartItems.map(item => 
      `- Produk: ${item.name}\n- Jumlah: ${item.quantity} Sak (Netto ${item.quantity * item.weightPerItem} kg)`
    ).join('\n\n');

    const text = `Halo PalmFeed, saya ingin melakukan pemesanan pakan:\n\n${productsText}\n- Total Harga: Rp ${cartTotal.toLocaleString("id-ID")}\n\nData Pengiriman:\n- Nama: ${buyerName}\n- Alamat: ${buyerAddress}\n- No. HP: ${buyerPhone}\n\nMohon informasi metode pembayaran dan estimasi ongkos kirim. Terima kasih!`;

    const url = `https://wa.me/6285135353689?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowCheckoutModal(false);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/10 bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg text-primary">Keranjang Belanja</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-primary/5 rounded-full transition-colors text-primary">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-primary/50 flex flex-col items-center justify-center h-full">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p>Keranjang Anda masih kosong.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm relative group">
                <div className="w-20 h-20 bg-background rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="/images/real_product.png" alt={item.name} className="h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary text-sm mb-1 leading-tight">{item.name}</h4>
                  <div className="text-secondary font-bold text-sm mb-2">Rp {item.price.toLocaleString('id-ID')}</div>
                  <div className="text-xs text-primary/60 bg-primary/5 px-2 py-1 rounded w-max">
                    Jumlah: {item.quantity} Sak ({item.quantity * item.weightPerItem}kg)
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -top-2 -right-2 bg-white text-red-500 p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                  title="Hapus item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-primary/70">Subtotal:</span>
              <span className="text-2xl font-bold text-primary">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
            <button 
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setShowCheckoutModal(false)} />
          <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-primary/10 flex justify-between items-center bg-background">
              <h3 className="font-serif text-xl font-bold text-primary">Data Pengiriman</h3>
              <button onClick={() => setShowCheckoutModal(false)} className="text-primary/60 hover:text-primary">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleWhatsAppCheckout} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Nama Lengkap</label>
                <input 
                  type="text" required
                  value={buyerName} onChange={e => setBuyerName(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  placeholder="Budi Santoso"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Nomor WhatsApp</label>
                <input 
                  type="tel" required
                  value={buyerPhone} onChange={e => setBuyerPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">Alamat Lengkap Pengiriman</label>
                <textarea 
                  required rows={3}
                  value={buyerAddress} onChange={e => setBuyerAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/10 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none resize-none"
                  placeholder="Jl. Perkebunan No. 12, Jawa Barat"
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-accent transition-colors flex justify-center items-center gap-2">
                  Kirim Pesanan
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
