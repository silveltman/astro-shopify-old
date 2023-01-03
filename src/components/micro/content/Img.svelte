<script lang="ts">
  export let img: String
  // export let link: String
  // export let style: String

  let className = ''
  export { className as class }
  export let sizes: String = ''
  export let style: String = ''

  function findBetween(str, start, end) {
    const startIndex = str.indexOf(start) + start.length
    const endIndex = str.indexOf(end, startIndex)
    return str.substring(startIndex, endIndex)
  }

  function replace(attribute, value) {
    const currentValue = findBetween(img, `${attribute}="`, '"')
    img = img.replace(currentValue, value)
  }

  if (className) replace('class', className)
  if (sizes) replace('sizes', sizes)
  replace('style', style)
</script>

{@html img}
