# Реакции

Следующая концепция, которую необходимо понять это реакции. Добавьте в конец файла `/src/counter.store.ts` следующий код:

```js
export const counterStore = new Store()

autorun(() => {
  console.log(counterStore.count)
})
```

Мы создали экземпляр класса `Store` и добавили `autorun` как пример базовой реакции. Функция, которую мы передаем в `autorun` будет запускаться каждый раз, когда значение `count` изменится. Откройте консоль, чтобы убедиться в этом.

Реакции похожи на `computed`, за исключением того, что `computed` возвращает новое значение, а реакции являются побочным эффектом изменения состояния и никакого нового значения не возвращают. Вывод в консоль, выполнение сетевых запросов, обновление React-дерева - все это пример реакций.

### Обновление React-компонента как пример реакции

Перейдем к файлу `/src/App.tsx` и напишем следующий код:

```js
import { observer } from 'mobx-react-lite'
import { counterStore } from './counter.store'

const App = observer(() => {
  return (
    <div className='App'>
      <h1>{counterStore.count}</h1>
      <h2>{counterStore.double}</h2>

      <button onClick={counterStore.inc}>+</button>
      <button onClick={counterStore.dec}>-</button>
    </div>
  )
})

export default App
```

Мы видим тут обычный React-компонент, который обернут в функцию `observer` из пакета `mobx-react-lite`.

`observer` автоматически подписывает React-компонент на любые наблюдаемые поля, которые используются во время рендеринга. В данном случае компонент подпишется на изменения `count` и `double` и будет перерендериваться только при их изменении.

Концептуально `observer` это такая же реакция, как `autorun`. Схематично мы могли бы изобразить эту реакцию вот так:

```js
autorun(() => this.render())
```

"Под капотом" функция работает немного сложнее, но для общего понимания этого достаточно.

### Как это работает?

Мы нигде явно не подписывали `autorun` или наш React-компонент `App` на изменения свойства `count`. Как MobX понимает на какие свойства подписаться?

Никак. MobX не подписывается на изменения значений, он отслеживает доступ к свойствам объекта. 

Когда вы считываете поле `count` внутри `observer`, сам `observer` запоминает тот факт, что вы использовали поле `count` в теле его функции. Другими словами, самого чтения поля достаточно, чтобы `observer` (или любая другая реакция), знали, что они зависят от этого поля и что за ним нужно следить.

Из-за этого обычно возникает ощущение "магии" MobX. Чтобы демистифицировать MobX, обратитесь к главе "Как работает MobX изнутри".