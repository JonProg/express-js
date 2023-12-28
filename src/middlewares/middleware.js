exports.middlewareGlobal = (req,rep,next) => {
    /*req.locals.variavel = valor;     
    Bom para quando temos que eviar um dado padrão para todas as views*/
    next();
}