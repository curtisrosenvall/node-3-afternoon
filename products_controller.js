module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;

        dbInstance.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.create_product(id)
        .then( () => res.sendStatus(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');


        dbInstance.create_product()
        .then( () => res.sendStatus(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.create_product([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_product(id)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      }


};