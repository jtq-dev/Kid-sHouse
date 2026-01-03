import { Container } from "./UI";
import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  // Replace later
  const phone = "+237 699038487";
  const email = "tchuileng2007@gmail.com";

  return (
    <div className="bg-slate-900 text-white">
      <Container>
        <div className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/85">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} /> {phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={14} /> {email}
            </span>
            <span className="inline-flex items-center gap-2 opacity-85">
              <MapPin size={14} /> Douala, Cameroon
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/80">
            <a className="hover:text-white" href="#">Facebook</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
