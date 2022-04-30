let tipoCafe = prompt ("¿Que cafe desea? Elija uno de la siguiente lista:\n" + "\nAmericano" + "\nCafe con leche" + "\nCortado" + "\nLagrima" + "\nCapuccino" + "\nPara terminar escriba salir");
while (tipoCafe != "salir")
    {
        switch(tipoCafe)
        {
            case "americano":
                alert ("Perfecto, disfruta tu" + tipoCafe)
                break;
            case "cafe con leche":
                alert("Perfecto, disfruta tu" + tipoCafe)
                break;
            case "cortado":
                alert("Perfecto, disfruta tu" + tipoCafe)
                break;
            case "lagrima":
                alert("Perfecto, disfruta tu" + tipoCafe)
                break;
            case "capuccino":
                alert("Perfecto, disfruta tu" + tipoCafe)
                break;
            default:
                alert("No disponible")
                break;
        }
        tipoCafe = prompt ("¿Que cafe desea? Elija uno de la siguiente lista:\n" + "\nAmericano" + "\nCafe con leche" + "\nCortado" + "\nLagrima" + "\nCapuccino" + "\nPara terminar escriba salir");
    }