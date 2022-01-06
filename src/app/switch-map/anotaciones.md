## Para tener en cuenta

Switches to a new observable on emissions from source, cancelling any previously active inner observables.

Safest default for flattening, hard to create leaks like mergeMap.

Useful for HTTP request that can be cancelled [GET].

Great for reset, pause, and resume functionality.

**Avoid switchMap when cancellation could have undesired effects, such as saves [POST]

## Traducción de tips anteriores

Cambia a un nuevo observable sobre las emisiones de la fuente, cancelando cualquier observable interno previamente activo.

Valor predeterminado más seguro para aplanar, difícil de crear fugas como mergeMap.

Útil para solicitudes HTTP que se pueden cancelar [GET].

Excelente para restablecer, pausar y reanudar la funcionalidad.

** Evite switchMap cuando la cancelación pueda tener efectos no deseados, como guardar [POST]