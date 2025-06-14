# LIVE_LINK

https://worldtourapi.netlify.app/


Sure! Here's a **short and clean REST Countries API documentation snippet** you can add to your `README.md`:

---

## 🌍 REST Countries API (v3.1)

**Base URL:** `https://restcountries.com/v3.1`

### 🔹 Common Endpoints

| Endpoint           | Description                        |
| ------------------ | ---------------------------------- |
| `/all`             | Get all countries                  |
| `/name/{name}`     | Search by country name             |
| `/alpha/{code}`    | Get country by ISO 2/3-letter code |
| `/region/{region}` | Get countries in a region          |

### 🔸 Example API Call

```bash
GET https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population
```

### ✅ Sample Fields

* `name.common`
* `flags.png`
* `capital[]`
* `region`
* `population`
* `area`
* `cca3`

No API key required. Supports CORS. Perfect for frontend apps!

---

Let me know if you want a badge or live preview embed.

