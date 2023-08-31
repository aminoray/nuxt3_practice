---
to: '<%= scss? `components/${category}/${dir}/${name}/${h.changeCase.param(name)}.scss` : null %>'
---

.<%= h.changeCase.param(name) %> {

}
