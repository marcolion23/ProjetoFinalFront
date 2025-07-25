import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


// Angular Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Localização (Português Brasil)
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componentes Base
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

// Diretivas
import { RedDirective } from './directives/red.directive';

// Views (CRUDs principais)
import { HomeComponent } from './views/home-crud/home-crud.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EstoqueCrudComponent } from './views/estoque-crud/estoque-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { RelatoriosCrudComponent } from './views/relatorios-crud/relatorios-crud.component'; // <-- Padrão novo

// Produtos
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

// Forma de Pagamento
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';

// Clientes
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

// Estoque
import { EstoqueCreateComponent } from './components/estoque/estoque-create/estoque-create.component';
import { EstoqueReadComponent } from './components/estoque/estoque-read/estoque-read.component';
import { EstoqueUpdateComponent } from './components/estoque/estoque-update/estoque-update.component';
import { EstoqueDeleteComponent } from './components/estoque/estoque-delete/estoque-delete.component';

// Fornecedores
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';

// Relatórios
import { RelatorioCreateComponent } from './components/relatorios/relatorio-create/relatorio-create.component';
import { RelatorioReadComponent } from './components/relatorios/relatorio-read/relatorio-read.component';
import { RelatorioUpdateComponent } from './components/relatorios/relatorio-update/relatorio-update.component';
import { RelatorioDeleteComponent } from './components/relatorios/relatorio-delete/relatorio-delete.component';

// Agendamentos
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { AgendamentoCreateComponent } from './components/agendamentos/agendamento-create/agendamento-create.component';
import { AgendamentoReadComponent } from './components/agendamentos/agendamento-read/agendamento-read.component';
import { AgendamentoUpdateComponent } from './components/agendamentos/agendamento-update/agendamento-update.component';
import { AgendamentoDeleteComponent } from './components/agendamentos/agendamento-delete/agendamento-delete.component';

// Outros
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgendamentoCrudComponent } from './views/agendamentos-crud/agendamentos-crud.component';
import { PerfilCreateComponent } from './components/perfil/perfil-create/perfil-create.component';
import { PerfilReadComponent } from './components/perfil/perfil-read/perfil-read.component';
import { PerfilUpdateComponent } from './components/perfil/perfil-update/perfil-update.component';
import { PerfilDeleteComponent } from './components/perfil/perfil-delete/perfil-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,

    // Views
    HomeComponent,
    ProductCrudComponent,
    FormaPagamentoCrudComponent,
    ClienteCrudComponent,
    EstoqueCrudComponent,
    FornecedorCrudComponent,
    RelatoriosCrudComponent,

    // Componentes CRUD
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,

    FormaPagamentoCreateComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoUpdateComponent,
    FormaPagamentoDeleteComponent,

    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,

    EstoqueCreateComponent,
    EstoqueReadComponent,
    EstoqueUpdateComponent,
    EstoqueDeleteComponent,

    FornecedorCreateComponent,
    FornecedorReadComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent,

    RelatorioCreateComponent,
    RelatorioReadComponent,
    RelatorioUpdateComponent,
    RelatorioDeleteComponent,


    AgendamentoCrudComponent,
    AgendamentosComponent,
    AgendamentoCreateComponent,
    AgendamentoReadComponent,
    AgendamentoUpdateComponent,
    AgendamentoDeleteComponent,

    AjustesComponent,
    PerfilComponent,

    // Diretivas
    RedDirective,
      PerfilCreateComponent,
      PerfilReadComponent,
      PerfilUpdateComponent,
      PerfilDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Angular Material
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,

    // HTTP
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
