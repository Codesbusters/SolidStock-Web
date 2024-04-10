import {Link} from "@nextui-org/link";
import {Card} from "@nextui-org/card";


const productFamily = [
    "Vin Rouge",
    "Vin Blanc",
    "Rosé"
]

export default function SideMenu() {
    return (
      <>
          <div className={"h-full max-w-fit p-8 pr-10 flex flex-col gap-5"}>
              <h2 className={"font-bold text-2xl"}>Produits</h2>
              <Link isBlock  href="#"  className={""} color={"danger"}>
                  ⚡ Vin Rouge
              </Link>

              <Link isBlock href="#">
                  ⚡ Vin Blanc
              </Link>
              <Link isBlock href="#" color={"foreground"}>
                  ⚡ Vin Rosé
              </Link>
              <div>
                  
              </div>
          </div>
      </>
    );
}