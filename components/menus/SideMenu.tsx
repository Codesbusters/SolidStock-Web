import {Link} from "@nextui-org/link";
import {Card} from "@nextui-org/card";


const productFamily = [
    "Vin Rouge",
    "Vin Blanc",
    "Rosé"
]

export default function SideMenu() {

    const list = [
        {
            id: 1,
            title: "Vin Rouge"
        },
        {
            id: 2,
            title: "Vin Blanc"
        },
        {
            id: 3,
            title: "Vin Rosé"
        },
        {
            id: 4,
            title: "Spiritueux"
        },
        {
            id: 5,
            title: "Bières"
        },
        {
            id: 6,
            title: "Autre"
        }
    ];

    return (
      <>
          <div className={"h-full max-w-fit p-8 pr-10 flex flex-col gap-5"}>
              <h2 className={"font-bold text-2xl"}>Produits</h2>
                <div className={"flex flex-col gap-2"}>
                    {list.map((item, index) => (
                        <Link key={index} href={"/productFamily/" + item.id}>
                                {item.title}
                        </Link>
                    ))}
                </div>
          </div>
      </>
    );
}