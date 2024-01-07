import React, { ChangeEvent, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { clearCart, removeItemFromCart, selectCheckout, updateItemQuantity } from "../../../../reducers/checkout.slice";
import { CartItemDto } from "../../dtos/cart-item.dto";
import { Header } from "../../../shared/components/header";
import './style.scss';
import { formatCurrency } from "../../../../utils/formatters";
import { Footer } from "../../../shared/components/footer";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { notify } from "../../../../utils/notify.util";
import { DialogConfirm } from "../../../shared/components/dialog/confirm";

interface CouponDto {
  code: string;
  discount: number;
}

const CheckoutCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const checkout = useAppSelector(selectCheckout);

  const [couponCode, setCouponCode] = useState<string>('');
  const [couponApplied, setCouponApplied] = useState<CouponDto | undefined>(undefined);

  const [itemToRemove, setItemToRemove] = useState<CartItemDto | undefined>(undefined);

  const [showClearCartDialog, setShowClearCartDialog] = useState<boolean>(false);
  const [showRemoveCouponDialog, setShowRemoveCouponDialog] = useState<boolean>(false);

  const totalPrice = useMemo((): number => {
    let total = checkout.items.reduce((price, item: CartItemDto) => price + item.product.price * item.quantity, 0);

    if (couponApplied) {
      total -= couponApplied.discount;
    }

    if (total < 0) {
      total = 0;
    }

    return total;
  }, [checkout, couponApplied]);

  const incrementItemQuantity = (item: CartItemDto) => {
    dispatch(updateItemQuantity({...item, quantity: item.quantity + 1}));
  }

  const decrementItemQuantity = (item: CartItemDto) => {
    dispatch(updateItemQuantity({...item, quantity: item.quantity - 1}));
  }

  const onRemoveItem = (item: CartItemDto) => {
    setItemToRemove(item);
  }

  const onConfirmRemoveItem = () => {
    if (itemToRemove) {
      dispatch(removeItemFromCart(itemToRemove));
      setItemToRemove(undefined);
      notify({ type: 'success', message: 'O item foi removido do carrinho.'});
    }
  }

  const onClearCart = (): void=> {
    setShowClearCartDialog(true);
  }

  const onConfirmClearCart = (): void=> {
    dispatch(clearCart());
    setShowClearCartDialog(false);
    notify({ type: 'success', message: 'O seu carrinho foi esvaziado.'});
  }

  const applyCoupon = (couponCode: string): void => {
    setCouponApplied({code: couponCode, discount: 10});
    setCouponCode('');
    notify({ type: 'success', message: `Cupom de código ${couponCode.toUpperCase()} adicionado com sucesso!`});
  }

  const removeCoupon = (): void => {
    setShowRemoveCouponDialog(true);
  }

  const confirmRemoveCoupon = (): void => {
    setCouponApplied(undefined);
    setShowRemoveCouponDialog(false);
    notify({ type: 'success', message: `Cupom removido com sucesso!`})
  }

  const onPurchase = () => {
    notify({ type: 'success', message: 'Parabéns! Você concluiu a sua compra com sucesso.'});
  }

  return (
    <>
      <Header />
      
      <div id='checkout-cart' className="container">
        <h2 className="text-gray-500 mt-2">Carrinho</h2>

        {checkout.items.map((item: CartItemDto) => (
          <div className="cart-item py-3 gap-2" key={item.product.id}>
            <div className="flex-[2] text-gray-500 px-3">{item.product.title}</div>
            <div className="flex-1 flex flex-row justify-center items-center gap-3">
              <button className="text-gray-500" disabled={item.quantity < 2} onClick={() => decrementItemQuantity(item)}>-</button>
              <div className="text-gray-500">{item.quantity}</div>
              <button className="text-gray-500" onClick={() => incrementItemQuantity(item)}>+</button>

              <button onClick={() => onRemoveItem(item)} className="text-danger hover:opacity-80" >
                <DeleteIcon sx={{ fontSize: 20, marginBottom: '2px' }} />
              </button>
            </div>
            <div className="flex-1 flex items-center flex-row md:flex-col">
              <div className="text-gray-500 text-center">
                Unid
                <span className="md:hidden">:&nbsp;</span>
              </div>
              <div className="font-semibold text-center text-gray-500">
                {formatCurrency({value: item.product.price})}
              </div>
            </div>
            <div className="flex-1 md:pr-3 flex items-center flex-row md:flex-col">
              <div className="text-gray-500 text-center">
                Total
                <span className="md:hidden">:&nbsp;</span>
              </div>
              <div className="font-semibold text-center text-gray-500">
                {formatCurrency({value: item.product.price * item.quantity})}
              </div>
            </div>
          </div>
        ))}

        {checkout.items.length > 0 && (<>
          {!couponApplied && (
          <div className="cart-item py-3 gap-2">
            <div className="flex-1 text-gray-500 px-3">Possui cupom?</div>
            <div>
              <input
                className="flex-1 h-[44px] border rounded-lg px-2 coupon-input"
                placeholder="Digite o código aqui"
                value={couponCode}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>setCouponCode(event.target.value)}
              />
            </div>
            <div className="flex-1 flex justify-end pr-3">
              <button
                className="rounded-2xl border border-primary px-3 text-primary h-[36px] hover:bg-primary hover:text-white cursor-pointer"
                onClick={() => applyCoupon(couponCode)}
                disabled={couponCode.length < 1}
              >Aplicar</button>
            </div>
          </div>)}

          {couponApplied && (
          <div className="cart-item py-3 gap-2">
            <div className="flex-[2] text-gray-500 px-3">
              Cupom aplicado: {couponApplied.code.toUpperCase()}
            </div>
            <div className="flex-1 flex flex-row justify-center items-center gap-3">
              <button onClick={removeCoupon} className="text-danger md:ml-[4.3rem] hover:opacity-80" >
                <DeleteIcon sx={{ fontSize: 20, marginBottom: '2px' }} />
              </button>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1 md:pr-3 flex items-center flex-row md:flex-col">
              <div className="text-gray-500 text-center">
                Desconto
                <span className="md:hidden">:&nbsp;</span>
              </div>
              <div className="font-semibold text-center text-gray-500">
                {formatCurrency({value: couponApplied.discount})}
              </div>
            </div>
          </div>)}

          <div className="flex justify-center md:justify-end items-center pt-12 pb-10">
            Valor a pagar: <span className="text-[20px] ml-3 font-semibold text-gray-600">{formatCurrency({value: totalPrice})}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-12">
            <button
              onClick={onClearCart}
              className="border border-danger rounded-2xl h-[44px] px-5 text-[18px] text-danger bg-white mt-3 hover:bg-danger hover:text-white"
            >Esvaziar carrinho</button>
            <button 
              onClick={onPurchase}
              className="border border-primary rounded-2xl h-[44px] px-5 text-[18px] bg-primary text-white mt-3 hover:opacity-80"
            >Finalizar compra</button>
          </div>
        </>)}

        {checkout.items.length === 0 && (
          <div className="text-[24px] text-gray-500 mt-8">
            OPS! Você ainda não adicionou nenhum produto ao seu carrinho.
          </div>
        )} 
      </div>
      <Footer />

      <DialogConfirm
        open={itemToRemove !== undefined}
        onConfirm={onConfirmRemoveItem}
        onCancel={() => setItemToRemove(undefined)}
        buttonConfirmText="Sim, tenho"
        buttonCancelText="Não, cancelar"
        title="Remover item"
      >
        <div className="mb-5">
          Tem certeza de que deseja remover este item do carrinho?
        </div>
      </DialogConfirm>

      <DialogConfirm
        open={showClearCartDialog}
        onConfirm={onConfirmClearCart}
        onCancel={() => setShowClearCartDialog(false)}
        buttonConfirmText="Sim, tenho"
        buttonCancelText="Não, cancelar"
        title="Esvaziar carrinho"
      >
        <div className="mb-5">
          Tem certeza de que deseja esvaziar o carrinho?
        </div>
      </DialogConfirm>

      <DialogConfirm
        open={showRemoveCouponDialog}
        onConfirm={confirmRemoveCoupon}
        onCancel={() => setShowRemoveCouponDialog(false)}
        buttonConfirmText="Sim, tenho"
        buttonCancelText="Não, cancelar"
        title="Remover cupom"
      >
        <div className="mb-5">
          Tem certeza de que deseja remover o cupom?
        </div>
      </DialogConfirm>
    </>
  );
}

export { CheckoutCart };
