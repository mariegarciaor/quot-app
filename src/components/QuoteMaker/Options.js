const printerSettings = {

    service: {
        step: 1,
        name: 'Servicio de impresión',
        title: '¿Qué servicio te gustaría cotizar?',
        options: [
            {
                selection_name: 'Tarjetas de presentación',
                description: 'Deja tu huella al hacer networking reflejando tu identidad y tu talento (:',
                cost: 0,
                time: 0
            },

            {
                selection_name: 'Volantes y folletos',
                description: '¡Atrae aún más clientes! La calidad de tu negocio no estará en duda con estos acabados.',
                cost: 0,
                time: 0
            },

            {
                selection_name: 'Hojas membretadas',
                description: 'Nada más profesional para impactar que papelería personalizada ¿Listo para cerrar el trato?.',
                cost: 0,
                time: 0
            }
        ]
    },


    system: { //Sistema de impresión
        step: 2,
        name: 'Sistema de impresión',
        title: 'Escoge el sistema de impresión',
        options: [
            {
                selection_name: 'Digital',
                description: '¡La más barata! Ideal para paquetes de 100 y 500 piezas.',
                cost: 30,
                time: 0.2
            },
        
            {
                name: 'Offset',
                description:'Perfecto para pedidos de 1000 piezas',
                cost: 15,
                time:0.2
            },
        
            {
                name: 'Serigrafia',
                description:'Frente de la tarjeta. Logotipo y datos completos juntos.',
                cost: 20,
                time: 1.2
            }
        ]
    },

    type: { //Tipo de impresión
        step: 3,
        name: 'Tipo de impresión',
        title: '¿En cuántas caras las necesitas?',
        options: [   
            {
                name: 'Una cara',
                description:'Diseño limpio, logotipo y datos en el frente de la tarjeta.',
                cost: 20,
                time: 0.5
            },
        
            {
                name: 'Dos caras',
                description:'¡Doble impacto! Logotipo en frente y datos por detrás',
                cost: 300,
                time: 1
            }
        ]
    },

    quantity: { //Cantidad
        step: 4,
        name: 'Cantidad',
        title: '¿Cuántas tarjetas necesitas?',
        options: [
            {
                name: 100,
                description:'piezas',
                cost: 50,
                time: 0.3
            },
        
            {
                name: 500,
                description:'piezas',
                cost: 100,
                time: 0.3
            },
        
            {
                name: 1000,
                description:'piezas',
                cost: 150,
                time: 0.3
            }
        ]  
    },

    finish: { //Terminado
        step: 5,
        name: 'Terminado',
        title: '¿Qué terminado te gustaría?',
        options: [ 
            {
                name: 'Bordes redondeados',
                description:'Si buscas un diseño original este acabado ¡te encantará!',
                cost: 15,
                time: 0.2
            },
        
            {
                name: 'Plastificado',
                description:'Capa brillosa de refuerzo que brinda mayor duración.',
                cost: 20,
                time: 0.2
            },
        
            {
                name: 'Barniz UV',
                description:'Lo mejor de los dos mundos: mate y brillo ¿te animas a probarlo?',
                cost: 10,
                time: 0.2
            }
        ]
    },

    paper: { //Tipo de Papel
        step: 6,
        name: 'Tipo de papel',
        title: 'Ahora escoge un papel que defina tu identidad',
        options: [ 
            {
                name: 'Couché',
                description:'Papel súper suave, súper blanco y sin poros ;)',
                cost: 30,
                time: 0.3
            },
        
            {
                name: 'Opalina',
                description:'Si buscar un acabado suave y moderno ¡Esta es tu opción!',
                cost: 30,
                time: 0.3
            },
        
            {
                name: 'Sulfatado',
                description:'¡Tan brillante y duradera que no podrás escribir en ellas! O:',
                cost: 30,
                time:0.3
            }
        ]
    },

    design: { //Diseño
        step: 7,
        name: 'Diseño',
        title: '¿Cuentas con un diseño de tus tarjetas?',
        options: [ 
            {
                name: 'Diseño profesional',
                description:'Solo archivos: .ai y .pdf de alta calidad.',
                cost: 10,
                time: 1
            },
        
            {
                name: 'Idea de diseño',
                description:'Aquí si entran: .ppt, .docx, .jpeg y .png',
                cost: 200,
                time: 2
            },
        
            {
                name: 'No tengo diseño',
                description:'¡No te preocupes! Tenemos un equipo experto que creará algo increíble para ti ;)',
                cost: 300,
                time: 2
            }
        ]
    }
};