// Ruta del archivo data.json
const url = "data.json"; // Cambiar por la ruta correcta
// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
    // Retorna una nueva promesa que se resuelve después del setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Realiza la solicitud fetch dentro del setTimeout
            fetch("data.json")
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    console.log("Habitaciones:", data.rooms);
                    console.log("Tipos de Habitaciones:", data.roomTypes);
                    resolve(data); // Resuelve la promesa con los datos cargados
                })
                .catch((error) => {
                    console.error(error);
                    reject(error); // Rechaza la promesa si hay un error
                });
        }, 3000);
    });
}
// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
        let reservations = [];
        let id = 1;
        let i = true



        while (i){
            const option = Number(prompt(`Ingresa una opción:
                                    \n 1. Hacer una reserva.
                                    \n 2. Ver reservas actuales.
                                    \n 3. Cancelar reservas.
                                    \n 4. Editar reservas.
                                    \n 5. Salir.`))
            switch (opcion){
                case 1:
                    const numberOfPerson = Number(prompt(`Ingresa el número de personas.`));
                    const capacityTypeById = roomTypes
                    .filter((type) => type.capacity >= numberOfPerson)
                    .map(roomType => roomType.id);

                    let dateJoin = new Date(prompt("Ingresa la fecha de ingreso así:(Año-Mes-Día)"));
                    let dateExit = new Date(prompt("Ingresa la fecha de salida así: (Año-Mes-Día)"));

                    if (dateExit<dateJoin){
                        alert("Ingresa una fecha valida.");
                        continue;
                    }

                    //Verificar si hay habitaciones con la capacidad solicitada y en el rango de fechas disponibles.

                    const availableRooms = rooms.filter(function(room){
                        let reservesInRange = reservations.filter((element) => dateJoin >= element.dateJoinStored && dateJoin <= dateExitStored || dateExit >= dateJoinStored && dateExit <= dateExitStored || dateJoin < dateJoinStored && dateExit > dateExitStored).map(room => room.number);
                        return capacityTypeById.includes(room.roomTypeId) && !reservesInRange.includes(room.number);
                    });
                    if (!availableRooms){
                        alert("No hay habitaciones disponibles con tus necesidades, intenta con otra fecha.");
                    }
                    const selectedRoom = Number(prompt(
                        `Estas son las habitaciones disponibles.
                      \n Ingresa el número de la habitación que quieres reservar:`+
                        availableRooms
                        .map((room) => {
                            return `\nRoom Number: ${room.number} (${
                                roomTypes.find((type) => type.id === room.type).name
                            })`;
                            })
                            .join(", ")
                        ));

                        //Verificar si la habitacion que el cliente escogió existe o esta disponible.

                    let verify = availableRooms.map((element) => {
                        return element.number;
                    });

                    if (!verify.includes(selectedRoom)){
                        alert("La habitación escogida no existe o esta ocupada.")
                        continue;
                    }

                    //Tomar el nombre y guardar la reserva.

                    const name = prompt("Ingresa tu nombre para la reserva").toLocaleLowerCase();
                    const newResere = {
                        id: id++,
                        name: name,
                        dateJoinStored: dateJoin,
                        dateExitStored: dateExit,
                        number: chosenRoom,
                    }
                    reservations.push(newResere);
                    alert("Reserva exitosa");
                    console.log(`Reservas actuales: ${reservations}`);
                    break;
                case 2:
                    function viewReservations(){
                        const verifyName = prompt("Ingresa el nombre con el que reservaste").toLocaleLowerCase();
                        const reserveFlitred = reservations.filter((element) => element.name === verifyName)
                        return;
                    };
                    alert(viewReservations()
                    .map((storedRoom) => {
                        return `\n\n Nombre del reservante: ${storedRoom.name.toLocaleLowerCase()}
                        Numero de la reserva: ${storedRoom.id}
                        Numero de la habitación: ${storedRoom.number}
                        Tipo de habitación: ${roomTypes.find((type) => type.id == rooms.find((roomData)=> roomData.number == storedRoom.number).roomTypeId).name}
                        Fecha de ingreso: ${storedRoom.dateJoinStored}
                        Fecha de salida: ${storedRoom.dateExitStored}                        
                        `;
                        })
                        .join(", ")
                    );
                    break;
                case 3:
                    const cancelReserve = Number(prompt("Mira e ingresa el número de la reserva que desea eliminar:"+ 
                        reservations.map((storedRoom) => {
                            return `\n\n Nombre del reservante: ${storedRoom.name.toLocaleLowerCase()}
                            Numero de la reserva: ${storedRoom.id}
                            Numero de la habitación: ${storedRoom.number}
                            Tipo de habitación: ${roomTypes.find((type) => type.id == rooms.find((roomData)=> roomData.number == storedRoom.number).roomTypeId).name}
                            Fecha de ingreso: ${storedRoom.dateJoinStored}
                            Fecha de salida: ${storedRoom.dateExitStored}                        
                            `;
                            })
                            .join(", ")
                        ));
                        const cancel = reservations.find((element) => element.id == cancelReserve);
                        if (!cancel){
                            alert("El número que ingresaste no es válido");
                            continue;
                        }
                        reservations.slice(reservations.findIndex((reserveToCancel) => reserveToCancel.id == cancelReserve),1);
                        alert("La reserva ha sido eliminada, ahora se encuentran estas reservas:"+
                        reservations.map((storedRoom) => {
                            return `\n\n Nombre del reservante: ${storedRoom.name.toLocaleLowerCase()}
                            Numero de la reserva: ${storedRoom.id}
                            Numero de la habitación: ${storedRoom.number}
                            Tipo de habitación: ${roomTypes.find((type) => type.id == rooms.find((roomData)=> roomData.number == storedRoom.number).roomTypeId).name}
                            Fecha de ingreso: ${storedRoom.dateJoinStored}
                            Fecha de salida: ${storedRoom.dateExitStored}                        
                            `;
                            })
                            .join(", ")
                        );
                        break;
                case 4:
                    const editReserve = Number(prompt("Mira e ingresa el número de la reserva que desea editar:"+
                    reservations.map((storedRoom) => {
                        return `\n\n Nombre del reservante: ${storedRoom.name.toLocaleLowerCase()}
                        Numero de la reserva: ${storedRoom.id}
                        Numero de la habitación: ${storedRoom.number}
                        Tipo de habitación: ${roomTypes.find((type) => type.id == rooms.find((roomData)=> roomData.number == storedRoom.number).roomTypeId).name}
                        Fecha de ingreso: ${storedRoom.dateJoinStored}
                        Fecha de salida: ${storedRoom.dateExitStored}                        
                        `;
                        })
                        .join(", ")
                    ));
                    const edit = reservations.find((element) => element.id == editReserve);
                    if (!edit){
                        alert("El número que ingresaste no es válido.");
                        continue;
                    }
                    const newName = prompt("Ingresa el nuevo nombre de quien reserva");
                    const newNumberOfPerson = prompt("Ingresa el nuevo numero de personas");
                    const newDateJoin = prompt("Ingresa la nueva fecha de ingreso");
                    const newDateExit = prompt("Ingresa la nueva fecha de salida");

                    const changeCapacityTypeById = roomTypes
                    .filter((type) => type.capacity >= numberOfPerson)
                    .map(roomType => roomType.id);

                    if (newDateExit<newDateJoin){
                        alert("Ingresa una fecha válida.")
                        continue;
                    }
                    const availableRoomsEdit = rooms.filter(function(room){
                        const reservationsEdit = reservations.filter(element => element.id != editReserve)
                        let reservesInRangeEdit = reservationsEdit.filter((element) => newDateJoinateJoin >= element.dateJoinStored && newDateJoin <= dateExitStored || newDateExit >= dateJoinStored && newDateExit <= dateExitStored || newDateJoin < dateJoinStored && newDateExit > dateExitStored).map(room => room.number);
                        return capacityTypeByIdEdit.includes(room.roomTypeId) && !reservesInRangeEdit.includes(room.number);
                    });

                    if (!availableRoomsEdit){
                        alert("No hay habitaciones con tus nuevas necesidades, intenta en otra fecha.")
                    }
                    const newChosenRoom = Number(prompt(
                        `Estas son las habitaciones disponibles.
                      \n Ingresa el numero de la habitación que quieres reservar.`+
                        availableRoomsEdit
                        .map((room) => {
                            return `\nRoom Number: ${room.number} (${
                                roomTypes.find((type) => type.id === room.type).name
                            })`;
                            })
                            .join(", ")
                        ));
                        if (newChosenRoom){
                            const changes = reservations.find((element) => element.id == editReserve);
                            changes.dateJoinStored = newDateJoin;
                            changes.dateExitStored = newDateExit;
                            changes.number = newChosenRoom;
                        }
                        if (newName){
                            const changeName = reservations.find((element) => element.id == editReserve);
                            changeName.name = newName;
                        };
                        break;
                case 5:
                    i = false;
                    break;
            }
        }
    })
    .catch((error) =>{
        console.error("Error al mostrar la promesa" + error);
    });

