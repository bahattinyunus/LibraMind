const STEPS = [
  {
    title: "API İskeleti",
    detail: "CRUD taslakları ve veri modelini tanımla."
  },
  {
    title: "Veri Şeması",
    detail: "PostgreSQL üzerinde temel tablo yapısını çiz."
  },
  {
    title: "Öneri Motoru",
    detail: "Okuma geçmişine göre ilk algoritma prototipini hazırla."
  }
];

export function RoadmapList() {
  return (
    <section
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        padding: "2.5rem",
        background: "rgba(15,23,42,0.7)"
      }}
    >
      <h2>Başlangıç Sprinti</h2>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
        {STEPS.map((item) => (
          <article
            key={item.title}
            style={{
              padding: "1.25rem",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(15,23,42,0.8)"
            }}
          >
            <h3 style={{ margin: "0 0 0.25rem" }}>{item.title}</h3>
            <p style={{ margin: 0, color: "#94a3b8" }}>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

