
# helix

  simple templating

## Installation

    $ component install matthewmueller/helix

## API

### Helix()

Create a Helix instance.

```js
var $ = Helix(el);
```

### $(selector)

Select an element.

```js
$('.name')
$('#nav')
```

### #[attr](val)

Get and set attributes that are on the selected element.

```html
<input class="user" id="user" type="text" name="user">
```

```js
$('.user').type('radio').name('person')
```

### #text(val)

Get and set text

```js
$('.name').text('Matt')
$('.name').text() // Matt
```

### Helix.html(val)

Get and set HTML

```js
$('.name').text('<strong>Matt</strong>')
$('.name').text() // <strong>Matt</strong>
```

### Helix.add(cls)

Add a class

```js
$('.name').add('person')
```

### Helix.remove(cls)

Remove a class

```js
$('.name').remove('person')
```

### Helix.toggle(cls)

Toggle a class

```js
$('.name').toggle('person')
```

### Helix.attr(attr, val)

Get and set attribute that doesn't already exist

$('.name').attr('data-author', 'matt')

## License

  MIT
