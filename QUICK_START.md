# Event Booking System - Quick Start Guide

## 🚀 Getting Started Locally

### Prerequisites:
- Node.js 18+ installed
- npm or yarn package manager

### Installation:

1. **Install Dependencies**:
```bash
npm install
```

2. **Start Development Server**:
```bash
npm start
```
The app opens at `http://localhost:3000`

3. **Build for Production**:
```bash
npm run build
```

4. **Test Production Build Locally**:
```bash
npm install -g serve
serve -s build
```

---

## 📦 Project Structure

```
bookings/
├── public/
│   ├── index.html (Updated for SPA routing)
│   ├── 404.html (Vercel SPA routing handler)
│   ├── manifest.json (PWA config)
│   └── ...
├── src/
│   ├── App.js (Main app with routing)
│   ├── App.css (Royal elegant styling)
│   ├── components/
│   │   ├── EventDashboard.js
│   │   ├── EventDetails.js
│   │   ├── TicketBooking.js
│   │   ├── BookingConfirmation.js
│   │   ├── Cart.js
│   │   └── MyBookings.js
│   ├── context/
│   │   └── BookingContext.js (State management)
│   └── data/
│       └── eventsData.js (Sample events in ₹)
├── vercel.json (Deployment config)
├── .vercelignore (Deployment ignore file)
├── .env.production (Prod environment)
└── package.json
```

---

## 💎 Features

### Event Management
- ✅ Browse 6 premium events with elegance
- ✅ Filter by category (Music, Tech, Comedy, Art, Sports, Food)
- ✅ Real-time seat availability tracking
- ✅ Prices in Indian Rupees (₹)

### Shopping Cart
- ✅ Add multiple events to cart
- ✅ Adjust quantities
- ✅ Remove items
- ✅ View total with calculations

### Booking Workflow
- ✅ Select tickets per event
- ✅ Enter customer information
- ✅ Form validation
- ✅ Confirmation with reference number
- ✅ Download ticket as text file

### User Experience
- ✅ Elegant royal purple & gold theme
- ✅ Smooth animations and transitions
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Real-time seat capacity visualization

---

## 🎨 Design System

### Color Palette:
- **Primary**: Deep Royal Blue (#1a1f3a)
- **Secondary**: Royal Purple (#2d1b4e)
- **Accent**: Luxurious Gold (#d4af37)
- **Highlight**: Bright Gold (#f4d03f)

### Typography:
- **Font**: Serif (Palantino Linotype, Book Antiqua, Palatino)
- **Weight**: 600-700 (Bold emphasis)
- **Spacing**: Letter-spacing for elegance

---

## 🔧 Environment Variables

### Development (.env.local):
```
REACT_APP_ENV=development
```

### Production (.env.production):
```
REACT_APP_ENV=production
REACT_APP_API_URL=https://api.yourdomain.com
NODE_ENV=production
```

---

## 📊 Available Events (Prices in ₹)

| Event | Date | Price | Seats |
|-------|------|-------|-------|
| 🎵 Summer Music Festival | 2026-06-15 | ₹2,500 | 500 |
| 💻 Tech Conference 2026 | 2026-05-20 | ₹6,999 | 1000 |
| 😂 Comedy Night | 2026-04-10 | ₹1,500 | 250 |
| 🎨 Art Exhibition | 2026-05-05 | ₹999 | 300 |
| 🏃 Marathon 2026 | 2026-06-01 | ₹10,399 | 5000 |
| 🍷 Food & Wine Festival | 2026-07-10 | ₹7,399 | 600 |

---

## 🚀 Deploy to Vercel

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy:
```bash
npm install -g vercel
vercel
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

---

## 🧪 Testing

### Manual Testing Checklist:
- [ ] Browse all events
- [ ] Filter by category
- [ ] Add to cart
- [ ] Update quantity in cart
- [ ] Remove from cart
- [ ] Complete booking
- [ ] View bookings
- [ ] Test on mobile device
- [ ] Test form validation
- [ ] Test download ticket

---

## 📝 Available Scripts

```bash
npm start        # Start development server
npm run build    # Create production build
npm test         # Run tests
npm run eject    # Eject from create-react-app (⚠️ irreversible)
```

---

## 🐛 Troubleshooting

### App won't start?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use?
```bash
PORT=3001 npm start
```

### Build fails?
- Check Node version: `node --version` (should be 18+)
- Clear npm cache: `npm cache clean --force`
- Rebuild: `npm run build`

---

## 📧 Support

For issues or questions:
1. Check [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
2. Review component code in `src/components/`
3. Check browser console for errors
4. Verify all dependencies are installed

---

**Status**: ✅ Production Ready
**Last Updated**: March 12, 2026
**Deploy to**: Vercel (recommended) or any Node.js hosting

