# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

packages:
npm i react-router-dom - https://www.w3schools.com/react/react_router.asp

strcuture:
src/
 ├── pages/
 │   ├── Home.jsx
 │   ├── Search.jsx
 │   ├── busTicket.jsx
 │   ├── TripDetails.jsx
 │   ├── SeatSelection.jsx
 │   ├── Checkout.jsx
 │   ├── Payment.jsx
 │   ├── MyBookings.jsx
 │
 ├── admin/
 │   ├── Dashboard.jsx
 │   ├── Trips.jsx
 │   ├── Bookings.jsx
 │
 ├── components/
 │   ├── Navbar.jsx
 │   ├── BusSearch.jsx
 │   ├── TripCard.jsx
 │   ├── Seat.jsx
 │   ├── Loader.jsx






Dynamic Routing
React **dynamic routing** ka matlab hota hai:
URL ke through **dynamic values** pass karna aur component ke andar use karna.

Main **React Router v6** ke hisaab se **`:`, `?`, `&`**
---

## 1️⃣ `:` → **Route Params (MOST IMPORTANT)**

👉 Jab URL ka **path dynamic** ho

### ✅ Route define

```jsx
<Route path="/bus/:busId" element={<BusDetails />} />
```

### URL

```
/bus/45
```

### Component ke andar access

```jsx
import { useParams } from "react-router-dom";

const BusDetails = () => {
  const { busId } = useParams();

  return <h2>Bus ID: {busId}</h2>;
};
```

🧠 Use case:

* Bus ID
* Booking ID
* User ID
* Product ID

---

## 2️⃣ `?` → **Query Params (Filters, Search)**

👉 URL ke baad data pass karna

### URL

```
/search?from=delhi&to=jaipur&date=2025-01-10
```

### Access in React

```code
import { useSearchParams } from "react-router-dom";


  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
```

🧠 Use case:

* Search filters
* Sorting
* Pagination

---

## 3️⃣ `&` → **Multiple Query Params**

👉 `&` ka kaam sirf **query params ko separate** karna hota hai

### URL

```
/search?from=delhi&to=jaipur&date=2025-01-10&price=low
```

Same `useSearchParams` se sab milta hai.

---

## 4️⃣ Optional Params ❓ (Advanced)

React Router v6 mein directly optional params supported nahi hain jaise v5,
but workaround hai:

### Option 1️⃣ Query Params use karo (Recommended)

```
/bus/45?seat=window
```

### Option 2️⃣ Multiple routes define karo

```jsx
<Route path="/bus/:id" element={<Bus />} />
<Route path="/bus/:id/:seat" element={<Bus />} />
```

---

## 5️⃣ `*` → Wildcard / Not Found

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 6️⃣ Navigate with params

### Using `<Link>`

```jsx
<Link to="/bus/45">View Bus</Link>
```

### Query params ke sath

```jsx
<Link to="/search?from=delhi&to=jaipur">Search</Link>
```

---

## 7️⃣ `useNavigate()` ke sath

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate(`/bus/${busId}`);
navigate(`/search?from=${from}&to=${to}`);
```

---

## 🔥 REAL Travel Website Example (Bus Search)

### Route

```jsx
<Route path="/search" element={<SearchResults />} />
```

### URL

```
/search?from=delhi&to=jaipur&date=2025-01-10
```

### Component

```jsx
const [params] = useSearchParams();

useEffect(() => {
  fetchBuses({
    from: params.get("from"),
    to: params.get("to"),
    date: params.get("date"),
  });
}, []);
```

---

## 🧠 Summary Table

| Symbol            | Meaning          | Example       |
| ----------------- | ---------------- | ------------- |
| `:`               | Route param      | `/bus/:id`    |
| `?`               | Query start      | `?from=delhi` |
| `&`               | Multiple queries | `from=a&to=b` |
| `*`               | Wildcard         | `*`           |
| `useParams`       | Read `:`         | `busId`       |
| `useSearchParams` | Read `?`         | filters       |

---

## 🧠 Interview One-liner

> “Route params are used for mandatory identifiers like IDs, while query params are used for optional data like filters and search.”


