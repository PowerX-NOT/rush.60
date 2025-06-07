const BOT_TOKEN = "7996188369:AAG3wh8HR0yiV2p1mRyf2LrDEoEW7ZE-v8s";
const CHAT_ID = "1620311557";

interface OrderNotification {
  orderId: string;
  customerName: string;
  address: string;
  phone: string;
  totalAmount: number;
  items: { name: string; quantity: number; price: number }[];
}

interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendOrderNotification = async (orderData: OrderNotification): Promise<boolean> => {
  try {
    const message = formatOrderMessage(orderData);
    
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send Telegram notification');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
};

export const sendContactMessage = async (contactData: ContactMessage): Promise<boolean> => {
  try {
    const message = formatContactMessage(contactData);
    
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send Telegram message');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending Telegram contact message:', error);
    return false;
  }
};

const formatOrderMessage = (order: OrderNotification): string => {
  const itemsList = order.items
    .map(item => `- ${item.name} × ${item.quantity} = ₹${item.quantity * item.price}`)
    .join('\n');

  return `
<b>🚚 NEW ORDER #${order.orderId}</b>

<b>Customer:</b> ${order.customerName}
<b>Phone:</b> ${order.phone}
<b>Address:</b> ${order.address}

<b>Order Items:</b>
${itemsList}

<b>Total Amount:</b> ₹${order.totalAmount}

<i>This order will be delivered within 60 minutes.</i>
`;
};

const formatContactMessage = (contact: ContactMessage): string => {
  return `
<b>📧 NEW CONTACT MESSAGE</b>

<b>Name:</b> ${contact.name}
<b>Email:</b> ${contact.email}
<b>Phone:</b> ${contact.phone}
<b>Subject:</b> ${contact.subject}

<b>Message:</b>
${contact.message}

<i>Received from 60-Minute Delivery website contact form.</i>
`;
};
