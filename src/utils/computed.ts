import { ComputedRef, Ref, computed } from "vue"

export function testComputed(booleanShit: Ref, counter: Ref):ComputedRef {
  return computed<string>(() => {
    if (booleanShit.value) return 'double ' + counter.value * 2
    return 'triple ' + counter.value * 3
  })
}
