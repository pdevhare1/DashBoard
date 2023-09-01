<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="shadow-up-4">
                <q-card-section>
                  <h5 class="text-h5">Form Chips</h5>
                  <p>
                    Chips can be used to represent small blocks of information.
                    They are most commonly used either for contacts or for tags.
                  </p>
                  <div class="chip">
                    Tag
                    <i class="close material-icons">close</i>
                  </div>
                  <q-btn
                    rounded
                    align="around"
                    class="q-mt-md justify-space-between"
                    color="#343a40"
                    label="Jane Doe"
                  >
                    <q-avatar size="25px" class="q-ml-md">
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-btn>
                  <q-btn
                    rounded
                    align="around"
                    class="q-mt-md q-ml-md justify-space-between"
                    color="#343a40"
                    label="Tag"
                    icon="close"
                  />
                </q-card-section>
              </q-card>
              <div class="row">
                <div class="col s12 q-mt-md">
                  <q-card class="shadow-up-4">
                    <q-card-section>
                      <h5 class="text-h6">Contacts</h5>
                      <p>To create a contact chip just add an img inside.</p>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <!--next card-->
              <div class="row">
                <div class="col s12 q-mt-md">
                  <q-card class="shadow-up-4">
                    <q-card-section>
                      <h5 class="text-h6">Tags</h5>
                      <p>
                        To create a tag chip just add a close icon inside with
                        the class <code>close</code>.
                      </p>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="row">
                <div class="col s12 q-mt-md">
                  <q-card class="shadow-up-4">
                    <q-card-section>
                      <h5 class="text-h6">Javascript Plugin</h5>
                      <p>
                        To add tags, just enter your tag text and press enter.
                        You can delete them by clicking on the close icon or by
                        using your delete button.
                      </p>
                      <hr />
                      <div class="chips"></div>
                      <p>Set initial tags.</p>
                      <div class="row">
                        <q-btn
                          rounded
                          align="around"
                          class="q-mt-md q-ml-md justify-space-between"
                          color="#343a40"
                          label="Apple"
                          icon="close"
                        />
                        <q-btn
                          rounded
                          align="around"
                          class="q-mt-md q-ml-md justify-space-between"
                          color="#343a40"
                          label="Microsoft"
                          icon="close"
                        />
                        <q-btn
                          rounded
                          align="around"
                          class="q-mt-md q-ml-md justify-space-between"
                          color="#343a40"
                          label="Google"
                          icon="close"
                        />
                      </div>

                      <hr />
                      <div class="chips chips-initial"></div>
                      <p>Use placeholders and override hint texts.</p>
                      <q-input
                        v-model="text"
                        label="Enter a Tag"
                        label-color="white"
                      />
                      <div class="chips chips-placeholder q-mt-md"></div>
                      <p>Use autocomplete with chips.</p>
                      <q-input v-model="text" label-color="white" />
                      <div class="chips chips-autocomplete"></div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="row">
                <div class="col s12 q-mt-md">
                  <q-card class="shadow-up-4">
                    <q-card-section>
                      <h5 class="text-h6">Options</h5>
                      <table
                        class="q-table table highlight responsive-table text-center"
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>data</td>
                            <td>Array</td>
                            <td>[]</td>
                            <td>
                              Set the chip data (look at the Chip data object)
                            </td>
                          </tr>
                          <tr>
                            <td>placeholder</td>
                            <td>String</td>
                            <td>''</td>
                            <td>
                              Set first placeholder when there are no tags.
                            </td>
                          </tr>
                          <tr>
                            <td>secondaryPlaceholder</td>
                            <td>String</td>
                            <td>''</td>
                            <td>
                              Set second placeholder when adding additional
                              tags.
                            </td>
                          </tr>
                          <tr>
                            <td>autocompleteOptions</td>
                            <td>Object</td>
                            <td>{}</td>
                            <td>Set autocomplete options.</td>
                          </tr>
                          <tr>
                            <td>limit</td>
                            <td>Integer</td>
                            <td>Infinity</td>
                            <td>Set chips limit.</td>
                          </tr>
                          <tr>
                            <td>onChipAdd</td>
                            <td>Function</td>
                            <td>null</td>
                            <td>Callback for chip add.</td>
                          </tr>
                          <tr>
                            <td>onChipSelect</td>
                            <td>Function</td>
                            <td>null</td>
                            <td>Callback for chip select.</td>
                          </tr>
                          <tr>
                            <td>onChipDelete</td>
                            <td>Function</td>
                            <td>null</td>
                            <td>Callback for chip delete.</td>
                          </tr>
                        </tbody>
                      </table>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
          <!-- ... Other rows ... -->
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // You can add your component logic here
};
</script>
