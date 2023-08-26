<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="q-gutter-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col s12">
              <q-card class="dark text-white shadow-up-6">
                <q-card-section>
                  <h5 class="text-h6">Form Text Inputs</h5>
                  <p>
                    Forms are the standard way to receive user inputted data.
                    The transitions and smoothness of these elements are very
                    important because of the inherent user interaction
                    associated with forms.
                  </p>
                  <h5 class="text-h6">Input fields</h5>
                  <p>
                    Text fields allow user input. The border should light up
                    simply and clearly indicating which field the user is
                    currently editing. You must have a
                    <code>.q-input</code> wrapper for your input and label. This
                    is used in our Input and Textarea form elements.
                  </p>
                  <p>
                    The <code>error</code> prop leverages HTML5 validation and
                    will add a <code>success</code> and <code>error</code> class
                    accordingly. If you don't want the Green and Red validation
                    states, just remove the <code>error</code> prop from your
                    inputs.
                  </p>
                  <form>
                    <div class="row">
                      <div class="col s6">
                        <q-input
                          filled
                          v-model="firstName"
                          label="First Name"
                          placeholder="Placeholder"
                          :error="!firstName"
                        />
                      </div>
                      <div class="col s6">
                        <q-input
                          filled
                          v-model="lastName"
                          label="Last Name"
                          :error="!lastName"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <q-input
                          filled
                          v-model="disabledInput"
                          label="Disabled"
                          :error="!disabledInput"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <q-input
                          filled
                          v-model="password"
                          label="Password"
                          type="password"
                          :error="!password"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <q-input
                          filled
                          v-model="email"
                          label="Email"
                          type="email"
                          :error="!email"
                        >
                          <template v-slot:append>
                            <q-icon name="email" />
                          </template>
                          <template v-slot:helper>
                            <q-icon
                              name="check"
                              color="green"
                              v-if="emailIsValid"
                            />
                            <q-icon name="warning" color="red" v-else />
                            <q-tooltip v-if="emailIsValid"
                              >Valid Email</q-tooltip
                            >
                            <q-tooltip v-else>Invalid Email</q-tooltip>
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        This is an inline input field:
                        <q-input
                          filled
                          inline
                          v-model="inlineEmail"
                          label="Email"
                          type="email"
                          :error="!inlineEmail"
                        />
                      </div>
                    </div>
                  </form>
                  <!-- <pre class="pre-scroll">
                    <code class="language-markup">
                      &lt;div class="row">
                        &lt;form>
                          &lt;div class="row">
                            &lt;div class="col s6">
                              &lt;q-input
                                filled
                                v-model="firstName"
                                label="First Name"
                                placeholder="Placeholder"
                                :error="!firstName"
                              />
                            &lt;/div>
                            &lt;div class="col s6">
                              &lt;q-input filled v-model="lastName" label="Last Name" :error="!lastName" />
                            &lt;/div>
                          &lt;/div>
                          &lt;div class="row">
                            &lt;div class="col s12">
                              &lt;q-input filled v-model="disabledInput" label="Disabled" :error="!disabledInput" disabled />
                            &lt;/div>
                          &lt;/div>
                          &lt;div class="row">
                            &lt;div class="col s12">
                              &lt;q-input
                                filled
                                v-model="password"
                                label="Password"
                                type="password"
                                :error="!password"
                              />
                            &lt;/div>
                          &lt;/div>
                          &lt;div class="row">
                            &lt;div class="col s12">
                              &lt;q-input
                                filled
                                v-model="email"
                                label="Email"
                                type="email"
                                :error="!email"
                              >
                                &lt;template v-slot:append>
                                  &lt;q-icon name="email" />
                                &lt;/template>
                                &lt;template v-slot:helper>
                                  &lt;q-icon name="check" color="green" v-if="emailIsValid" />
                                  &lt;q-icon name="warning" color="red" v-else />
                                  &lt;q-tooltip v-if="emailIsValid">Valid Email&lt;/q-tooltip>
                                  &lt;q-tooltip v-else>Invalid Email&lt;/q-tooltip>
                                &lt;/template>
                              &lt;/q-input>
                            &lt;/div>
                          &lt;/div>
                          &lt;div class="row">
                            &lt;div class="col s12">
                              This is an inline input field:
                              &lt;q-input
                                filled
                                inline
                                v-model="inlineEmail"
                                label="Email"
                                type="email"
                                :error="!inlineEmail"
                              />
                            &lt;/div>
                          &lt;/div>
                        &lt;/form>
                      &lt;/div>
                    </code>
                  </pre> -->
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Prefilling Text Inputs</h5>
                <p>
                  If you are having trouble with the labels overlapping
                  prefilled content, Try adding
                  <code>class="active"</code> to the label.
                  <br />
                  You can also call the function
                  <code>this.updateTextFields();</code> to reinitialize all the
                  Quasar labels on the page if you are dynamically adding
                  inputs.
                </p>
                <div class="row">
                  <div class="col s6">
                    <q-input
                      filled
                      v-model="firstName"
                      label="First Name"
                      class="active"
                      label-color="white"
                    />
                  </div>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;div class="col s6">
                        &lt;q-input filled v-model="firstName" label="First Name" class="active" />
                      &lt;/div>
                    &lt;/div>
                  </code>
                </pre>
                <pre>
                  <code class="language-javascript">
                    this.updateTextFields();
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Icon Prefixes</h5>
                <p>
                  You can add an icon prefix to make the form input label even
                  more clear. Just add an icon with the class
                  <code>prefix</code> before the input and label.
                </p>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="col s6">
                        <q-input filled v-model="firstName" label="First Name">
                          <template v-slot:prepend>
                            <q-icon name="account_circle" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col s6">
                        <q-input filled v-model="telephone" label="Telephone">
                          <template v-slot:prepend>
                            <q-icon name="phone" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </form>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;form class="col s12">
                        &lt;div class="row">
                          &lt;div class="col s6">
                            &lt;q-input filled v-model="firstName" label="First Name">
                              &lt;template v-slot:prepend>
                                &lt;q-icon name="account_circle" />
                              &lt;/template>
                            &lt;/q-input>
                          &lt;/div>
                          &lt;div class="col s6">
                            &lt;q-input filled v-model="telephone" label="Telephone">
                              &lt;template v-slot:prepend>
                                &lt;q-icon name="phone" />
                              &lt;/template>
                            &lt;/q-input>
                          &lt;/div>
                        &lt;/div>
                      &lt;/form>
                    &lt;/div>
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Custom Error or Success Messages</h5>
                <p>
                  You can add custom validation messages by adding either
                  <code>data-error</code> or
                  <code>data-success</code> attributes to your helper text
                  element.
                </p>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="col s12">
                        <q-input
                          filled
                          v-model="email"
                          label="Email"
                          label-color="white"
                        >
                          <template v-slot:append>
                            <q-icon name="email" />
                          </template>
                          <template v-slot:helper>
                            <q-icon
                              v-if="emailIsValid"
                              name="check_circle"
                              color="green"
                            />
                            <q-icon v-else name="cancel" color="red" />
                            Helper text
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </form>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;form class="col s12">
                        &lt;div class="row">
                          &lt;div class="col s12">
                            &lt;q-input filled v-model="email" label="Email">
                              &lt;template v-slot:append>
                                &lt;q-icon name="email" />
                              &lt;/template>
                              &lt;template v-slot:helper>
                                &lt;q-icon
                                  v-if="emailIsValid"
                                  name="check_circle"
                                  color="green"
                                />
                                &lt;q-icon
                                  v-else
                                  name="cancel"
                                  color="red"
                                />
                                Helper text
                              &lt;/template>
                            &lt;/q-input>
                          &lt;/div>
                        &lt;/div>
                      &lt;/form>
                    &lt;/div>
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Changing colors</h5>
                <p>
                  Here is a CSS template for modifying input fields in CSS. With
                  Sass, you can achieve this by just changing a variable. The
                  CSS shown below is unprefixed. Depending on what you use, you
                  may have to change the type attribute selector.
                </p>
                <pre class="pre-scroll">
                  <code class="language-css">
                    /* label color */
                    .q-input__label {
                      color: #000;
                    }
                    /* label focus color */
                    .q-input__label.focused {
                      color: #000;
                    }
                    /* label underline focus color */
                    .q-field--focused .q-field__bottom-row:before {
                      background-color: #000;
                    }
                    /* valid color */
                    .q-field--valid .q-field__bottom-row:before {
                      background-color: #000;
                    }
                    /* invalid color */
                    .q-field--invalid .q-field__bottom-row:before {
                      background-color: #000;
                    }
                    /* icon prefix focus color */
                    .q-input__prefix.focused {
                      color: #000;
                    }
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Textarea</h5>
                <p>
                  Textareas allow larger expandable user input. The border
                  should light up simply and clearly indicating which field the
                  user is currently editing. You must have a
                  <code>.q-input</code> div wrapping your input and label. This
                  is only used in our Input and Textarea form elements.
                </p>
                <p>
                  <strong
                    >Textareas will auto resize to the text inside.</strong
                  >
                </p>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <q-input
                          v-model="text"
                          label="Textarea"
                          :dense="dense"
                          label-color="white"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;form class="col s12">
                        &lt;div class="row">
                          &lt;div class="input-field col s12">
                            &lt;q-textarea
                              id="textarea1"
                              class="materialize-textarea"
                              v-model="textareaContent"
                            />
                            &lt;label for="textarea1">Textarea&lt;/label>
                          &lt;/div>
                        &lt;/div>
                      &lt;/form>
                    &lt;/div>
                  </code>
                </pre>
                <p>
                  advanced note: When dynamically changing the value of a
                  textarea with methods like jQuery's <code>.val()</code>, you
                  must trigger an autoresize on it afterwards because
                  <code>.val()</code> does not automatically trigger the events
                  we've bound to the textarea.
                </p>
                <pre>
                  <code class="language-javascript">
                    this.$nextTick(() => {
                      this.textareaContent = 'New Text';
                      this.$refs.textarea1.recalculateHeight();
                    });
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Icon Prefixes</h5>
                <p>
                  You can add an icon prefix to make the form input label even
                  more clear. Just add an icon with the class
                  <code>prefix</code> before the input and label.
                </p>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <q-input
                          v-model="text"
                          :dense="dense"
                          label-color="white"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mode_edit" color="white" />
                          </template>
                        </q-input>
                      </div>
                    </div>
                  </form>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;form class="col s12">
                        &lt;div class="row">
                          &lt;div class="input-field col s6">
                            &lt;q-icon name="mode_edit" class="q-mr-md" />
                            &lt;q-textarea
                              id="icon_prefix2"
                              class="materialize-textarea"
                            />
                            &lt;label for="icon_prefix2">Message&lt;/label>
                          &lt;/div>
                        &lt;/div>
                      &lt;/form>
                    &lt;/div>
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">File Input</h5>
                <p>
                  If you want to style an input button with a path input we
                  provide this structure.
                </p>
                <form>
                  <div class="file-field input-field">
                    <q-btn>
                      <input type="file" />
                    </q-btn>
                    <div class="file-path-wrapper">
                      <q-input class="file-path validate" />
                    </div>
                  </div>
                </form>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;form>
                      &lt;div class="file-field input-field">
                        &lt;button class="btn">
                          &lt;span>File&lt;/span>
                          &lt;input type="file" />
                        &lt;/button>
                        &lt;div class="file-path-wrapper">
                          &lt;input class="file-path validate" />
                        &lt;/div>
                      &lt;/div>
                    &lt;/form>
                  </code>
                </pre>
                <p>
                  You can also use the <code>multiple</code> attribute to allow
                  multiple file uploads.
                </p>
                <form>
                  <div class="file-field input-field">
                    <q-btn>
                      <input type="file" multiple />
                    </q-btn>
                    <div class="file-path-wrapper">
                      <q-input
                        class="file-path validate"
                        placeholder="Upload one or more files"
                        label-color="white"
                      />
                    </div>
                  </div>
                </form>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;form>
                      &lt;div class="file-field input-field">
                        &lt;button class="btn">
                          &lt;span>File&lt;/span>
                          &lt;input type="file" multiple />
                        &lt;/button>
                        &lt;div class="file-path-wrapper">
                          &lt;input
                            class="file-path validate"
                            placeholder="Upload one or more files"
                          />
                        &lt;/div>
                      &lt;/div>
                    &lt;/form>
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Character Counter</h5>
                <p class="caption">
                  Use a character counter in fields where a character
                  restriction is in place.
                </p>
                <div class="row">
                  <form>
                    <div class="row">
                      <div class="input-field col s6">
                        <q-input
                          id="input_text"
                          type="text"
                          v-model="inputText"
                          :maxlength="10"
                        />
                        <label for="input_text">Input text</label>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="input-field col s12">
                        <q-input
                          id="textarea2"
                          type="textarea"
                          class="materialize-textarea"
                          v-model="textareaValue"
                          :maxlength="120"
                        />
                        <label for="textarea2">Textarea</label>
                      </div>
                    </div>
                  </form>
                </div>
                <pre class="pre-scroll">
                  <code class="language-markup">
                    &lt;div class="row">
                      &lt;form>
                        &lt;div class="row">
                          &lt;div class="input-field col s6">
                            &lt;input
                              id="input_text"
                              type="text"
                              v-model="inputText"
                              :maxlength="10"
                            />
                            &lt;label for="input_text">Input text&lt;/label>
                          &lt;/div>
                        &lt;/div>
                        &lt;br />
                        &lt;div class="row">
                          &lt;div class="input-field col s12">
                            &lt;input
                              id="textarea2"
                              type="textarea"
                              class="materialize-textarea"
                              v-model="textareaValue"
                              :maxlength="120"
                            />
                            &lt;label for="textarea2">Textarea&lt;/label>
                          &lt;/div>
                        &lt;/div>
                      &lt;/form>
                    &lt;/div>
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <q-card class="dark text-white shadow-up-6">
              <q-card-section>
                <h5 class="text-h6">Initialization</h5>
                <p>
                  There are no options for this plugin, but if you are adding
                  these dynamically, you can use this to initialize them.
                </p>
                <pre>
                  <code class="language-javascript">
                    mounted() {
                      this.initializeCharacterCounters();
                    }
                  </code>
                </pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Alvin",
      lastName: "",
      disabledInput: "I am not editable",
      password: "",
      email: "",
      emailIsValid: false,
      inlineEmail: "",
    };
  },
  mounted() {
    this.initializeCharacterCounters();
  },
  watch: {
    email(newValue) {
      this.emailIsValid = this.isValidEmail(newValue);
    },
  },
  methods: {
    isValidEmail(email) {
      // Replace this with your email validation logic
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    initializeCharacterCounters() {
      this.$nextTick(() => {
        const inputElements = document.querySelectorAll(
          "input#input_text, textarea#textarea2"
        );
        M.CharacterCounter.init(inputElements);
      });
    },
  },
};
</script>
