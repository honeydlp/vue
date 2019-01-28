/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
/**
 * nodeOps 平台-封装了一系列dom操作方法
 * modules 平台-模块
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
