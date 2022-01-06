## Para tener en cuenta

Maintains one active inner subscription, activates next observables when previous completes.

Use when order of execution is important and inner observables have finite lifespans.

**Be careful if you have long running inner observables, as subsequent mapped observables could back up or never execute.

## Traducción de tips anteriores

Mantiene una suscripción interna activa, activa los siguientes observables cuando se completa el anterior.

Se utiliza cuando el orden de ejecución es importante y los observables internos tienen una vida útil finita.

** Tenga cuidado si tiene observables internos de larga ejecución, ya que los observables mapeados subsiguientes podrían retroceder o nunca ejecutarse.