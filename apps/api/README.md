# LibraMind API

LibraMind ekosisteminin çekirdek REST servisidir. FastAPI ile yazılmıştır ve aşağıdaki modülleri hedefler:

1. Kitap kataloğu (`books`)
2. Kullanıcı kayıtları (`users`)
3. Ödünç alma akışı (`loans`)

## Geliştirme

```bash
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Sağlık Kontrolü

Servis ayağa kalktığında `http://localhost:8000/health` endpoint’i `status: ok` döner.

