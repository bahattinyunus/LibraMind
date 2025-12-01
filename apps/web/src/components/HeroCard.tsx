const FEATURES = [
  "NLP tabanlı katalog arama",
  "Tahminleyici stok kontrolü",
  "Kişiselleştirilmiş öneri motoru"
];

export function HeroCard() {
  return (
    <section
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        padding: "2.5rem",
        marginBottom: "2rem",
        background:
          "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(147,51,234,0.15))"
      }}
    >
      <p style={{ fontSize: "0.9rem", letterSpacing: "0.2rem" }}>LIBRAMIND</p>
      <h1 style={{ fontSize: "3rem", marginTop: "0.5rem" }}>
        Yaşayan kütüphane platformu
      </h1>
      <p style={{ color: "#cbd5f5", maxWidth: "560px" }}>
        AI destekli mimari ile katalog yönetimi, kullanıcı deneyimi ve analitik
        katmanlarını tek çatı altında toplayın.
      </p>
      <ul style={{ marginTop: "2rem", padding: 0, listStyle: "none" }}>
        {FEATURES.map((feature) => (
          <li key={feature} style={{ marginBottom: "0.5rem" }}>
            ▹ {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

