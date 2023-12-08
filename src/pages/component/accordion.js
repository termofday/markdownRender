import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function MarkdownLegend() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full mx-auto max-w-sm rounded-xl bg-gray-500 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white bg-slate-700 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Markdown Legend</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-white">
                Test these following Markdown Cmds!

                  <table>
                    <td>
                        <th>Element</th>
                        <tr>Heading</tr>
                        <tr>Bold</tr>
                        <tr>Italic</tr>
                        <tr>Blockquote</tr>
                        <tr>Ordered List</tr>
                        <tr>Unordered List</tr>
                        <tr>Code</tr>
                        <tr>Horizontal Rule</tr>
                        <tr>Link</tr>
                        <tr>Image</tr>
                    </td>
                    <td>
                        <th>Markdown Syntax</th>
                        <tr># H1 ## H2 ### H3</tr>
                        <tr>**bold text**</tr>
                        <tr>*italicized text*</tr>
                        <tr> {">"} blockquote</tr>
                        <tr>1. First Item 2. Sec 3. Thi</tr>
                        <tr>- Fi - Se - Th</tr>
                        <tr>`code`</tr>
                        <tr>---</tr>
                        <tr>[title](https://yolo.tld)</tr>
                        <tr>![alt text](img.jpg)</tr>
                    </td>
                  </table>


              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
