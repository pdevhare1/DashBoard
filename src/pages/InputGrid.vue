<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <!-- Horizontal Grid -->
          <div class="row">
            <div class="col s12">
              <q-card>
                <q-card-section>
                  <h5 class="text-h6">Horizontal Grid</h5>
                  <div class="row">
                    <div class="col-1">
                      <q-input outlined placeholder="col s1" />
                    </div>
                    <div class="col-11">
                      <q-input outlined placeholder="col s11" />
                    </div>
                  </div>
                  <div class="row">
                    <!-- More columns... -->
                  </div>
                  <!-- More rows... -->
                </q-card-section>
              </q-card>
            </div>
          </div>

          <!-- Right Grid -->
          <div class="row q-mt-md q-gutter-xs">
            <div class="col s12 l6">
              <q-card>
                <q-card-section>
                  <h5 class="text-h6">Right Grid</h5>
                  <div class="row">
                    <div class="col-12">
                      <q-input outlined placeholder="col s12" />
                    </div>
                  </div>
                  <div class="row">
                    <!-- More columns... -->
                  </div>
                  <!-- More rows... -->
                </q-card-section>
              </q-card>
            </div>

            <!-- Left Grid -->
            <div class="col s12 l6">
              <q-card>
                <q-card-section>
                  <h5 class="text-h6">Left Grid</h5>
                  <div class="row">
                    <div class="col-12">
                      <q-input outlined placeholder="col s12" />
                    </div>
                  </div>
                  <div class="row">
                    <!-- More columns... -->
                  </div>
                  <!-- More rows... -->
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
