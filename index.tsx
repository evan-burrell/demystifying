import React from "react";
import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  SlideLayout,
  CodePane,
  Appear,
} from "spectacle";
import ReactDice from "react-dice-complete";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";

const Presentation = () => {
  return (
    <Deck
      template={() => <DefaultTemplate />}
      theme={{
        colors: {
          primary: "#FDF6F6",
          secondary: "#FDF6F6",
          tertiary: "#002C54",
        },
      }}
    >
      <Slide>
        <FlexBox height="100%">
          <Heading>Demystifying Job Batches</Heading>
        </FlexBox>
      </Slide>
      <SlideLayout.Center>
        <Heading>Hello 👋</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <img
          loading="lazy"
          src="./images/street-group.png"
          alt="Street Group"
          width="100%"
          className="invert"
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>I'm from Reading</Heading>
        <img
          loading="lazy"
          src="./images/reading.png"
          alt="Welcome to Reading"
        ></img>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>
          <s>Reading</s> Redding
        </Heading>
        <Heading>🇺🇸</Heading>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        imgProps={{ loading: "eager" }}
        src="./images/redding.png"
        alt="Redding"
      ></SlideLayout.FullBleedImage>
      <SlideLayout.Center>
        <Heading>Portland, Oregon</Heading>
        <iframe
          src="https://giphy.com/embed/Fwdrw9BSH4BVe"
          width="480"
          height="312"
          allowFullScreen
          style={{ border: "none", width: "100%" }}
        ></iframe>
      </SlideLayout.Center>
      <SlideLayout.Statement>Fun fact!</SlideLayout.Statement>
      <SlideLayout.Center>
        <Heading>I love sandwiches</Heading>
        <Heading>🥪</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <div className="scale-35">
          <img
            className="object-contain"
            loading="lazy"
            src="./images/calendar.png"
            alt="Sandwich calendar"
          ></img>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Laravel Live UK Official Sandwich</Heading>
        <FlexBox flexDirection="column">
          <img
            loading="lazy"
            alt="Frozen Sandwich"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2IwZ2h1bmVzczI5NTAzcWVwcmVxY2ltdm1jcXFzZzJmeGxnM3p2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LTo4tOHZYv30c/giphy.gif"
          />
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Roll for bread</Heading>
        <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
          <ol className="text-4xl space-y-8 list-decimal">
            <li>Whole Wheat</li>
            <li>Sourdough</li>
            <li>Rye</li>
            <li>Ciabatta</li>
            <li>Focaccia</li>
            <li>Brioche</li>
          </ol>
          <div>
            <ReactDice
              rollTime={2}
              numDice={1}
              rollDone={() => {}}
              dotColor="#FDF6F6"
              faceColor="#C5001A"
              dieSize={250}
            />
          </div>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Roll for cheese</Heading>
        <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
          <div>
            <ReactDice
              rollTime={2}
              numDice={1}
              rollDone={() => {}}
              dotColor="#FDF6F6"
              faceColor="#C5001A"
              dieSize={250}
            />
          </div>
          <ol className="text-4xl space-y-8 list-decimal">
            <li>Cheddar</li>
            <li>Swiss</li>
            <li>Provolone</li>
            <li>Mozzarella</li>
            <li>Plant Based Cheddar</li>
            <li>Brie</li>
          </ol>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Two rolls for roughage</Heading>
        <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
          <div>
            <ReactDice
              rollTime={2}
              numDice={1}
              rollDone={() => {}}
              dotColor="#FDF6F6"
              faceColor="#C5001A"
              dieSize={250}
            />
          </div>
          <ol className="text-4xl space-y-8 list-decimal">
            <li>Lettuce</li>
            <li>Tomato</li>
            <li>Avocado</li>
            <li>Cucumber</li>
            <li>Pickled Onion</li>
            <li>Sprouts</li>
          </ol>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Roll for main</Heading>
        <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
          <ol className="text-4xl space-y-8 list-decimal">
            <li>Quorn</li>
            <li>Turkey</li>
            <li>Ham</li>
            <li>Roast Beef</li>
            <li>Salami</li>
            <li>Tuna Salad</li>
          </ol>
          <div>
            <ReactDice
              rollTime={2}
              numDice={1}
              rollDone={() => {}}
              dotColor="#FDF6F6"
              faceColor="#C5001A"
              dieSize={250}
            />
          </div>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Roll for sauce</Heading>
        <div className="grid grid-cols-2 gap-48 items-center justify-items-center">
          <ol className="text-4xl space-y-8 list-decimal">
            <li>Mayonnaise</li>
            <li>Mustard</li>
            <li>Pesto</li>
            <li>BBQ</li>
            <li>Honey Mustard</li>
            <li>Ranch</li>
          </ol>
          <div>
            <ReactDice
              rollTime={2}
              numDice={1}
              rollDone={() => {}}
              dotColor="#FDF6F6"
              faceColor="#C5001A"
              dieSize={250}
            />
          </div>
        </div>
      </SlideLayout.Center>
      <SlideLayout.Section>What a sandwich. 🎉</SlideLayout.Section>
      <SlideLayout.Section>Why sandwiches?</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Services;

use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;

class SandwichService
{
    public function make(): Batch
    {
        return Bus::batch([
            new GatherIngredients,
            new PrepBread,
            new ApplyCondiments,
            new AddFillings,
            new AssembleSandwich,
        ])
            ->name('Create Sandwich')
            ->dispatch();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>Parallel Processing.</SlideLayout.Section>
      <SlideLayout.Center>
        <FlexBox>
          <img
            className="size-128"
            loading="lazy"
            src="./images/wrong-order-sandwich.png"
            alt="Wrong Order Sandwich"
          />
        </FlexBox>
        <Heading>Sandwich failed successfully.</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Services;

use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;

class SandwichService
{
    public function make(): Batch
    {
        return Bus::batch([
            [
                new GatherIngredients,
                new PrepBread,
                new ApplyCondiments,
                new AddFillings,
                new AssembleSandwich,
            ]
        ])
            ->name('Create Sandwich')
            ->dispatch();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox>
          <img
            className="size-128"
            loading="lazy"
            src="./images/rack.png"
            alt="Rack Sandwich"
          />
        </FlexBox>
        <Heading>Nice.</Heading>
      </SlideLayout.Center>
      <SlideLayout.Section>Let's simplify. 🧹</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Jobs;

use App\\Models\\Sandwich;
use App\\Services\\SandwichService;
use Illuminate\\Bus\\Batchable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Queue\\Queueable;

class CreateSandwich implements ShouldQueue
{
    use Batchable;
    use Queueable;

    public function __construct(private readonly Sandwich $sandwich) {}

    public function handle(SandwichService $sandwichService): void
    {
        $sandwichService->make($this->sandwich);
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>More Sandwiches?</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Services;

use App\\Jobs\CreateSandwich;
use App\\Models\\Sandwich;
use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;

class SandwichService
{
    public function createMany(): Batch
    {
        $sandwiches = Sandwich::query()
            ->unmade()
            ->get()
            ->map(fn (Sandwich $sandwich) => new CreateSandwich($sandwich))
            ->all();

        return Bus::batch($sandwiches)
            ->name('Make sandwiches')
            ->dispatch();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>Order? What order?</SlideLayout.Section>
      <SlideLayout.Center>
        <FlexBox>
          <img loading="lazy" src="./images/overcooked.png" alt="Overcooked" />
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Section>Rise of the sandwiches?</SlideLayout.Section>
      <SlideLayout.Section>Let's invert it. 🙃</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Services;

use App\\Jobs\\MakeOrder;
use App\\Models\\Order;
use Illuminate\\Bus\\Batch;
use Illuminate\\Support\\Facades\\Bus;

class OrderService
{
    public function make(Order $order): Batch
    {
        return Bus::batch([
            new MakeOrder($order),
        ])
            ->name("Make Order - $order->id")
            ->allowFailures()
            ->dispatch();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>Allow failures?</SlideLayout.Section>
      <SlideLayout.Center>
        <iframe
          src="https://giphy.com/embed/92S5gReZGnDgY"
          width="480"
          height="264"
          allowFullScreen
        ></iframe>
      </SlideLayout.Center>
      <SlideLayout.Section>Don't give up 👊</SlideLayout.Section>
      <SlideLayout.Section>More orders?</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Services;

use App\\Jobs\\CreateOrderJob;
use App\\Jobs\\MakeOrder;
use App\\Models\\Order;
use Illuminate\\Bus\\Batch;
use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\Bus;

class OrderService
{
    public function receive(Collection $files): Batch
    {
        return Bus::batch($files->map(fn (UploadedFile $file) => new CreateOrderJob($file)))
            ->name('Create Orders')
            ->allowFailures()
            ->dispatch();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox className="scale-75">
          <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
            {`
<?php

namespace App\\Jobs;

use Illuminate\\Bus\\Batchable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Queue\\Queueable;
use Illuminate\\Http\\UploadedFile;
use League\\Csv\\Reader;

class CreateOrdersJob implements ShouldQueue
{
    use Batchable;
    use Queueable;

    public function __construct(private readonly UploadedFile $uploadedFile) {}

    public function handle(): void
    {
        $orderLines = Reader::createFromFileObject($this->uploadedFile->openFile())->setHeaderOffset(0);

        $orders = [];

        foreach ($orderLines as $orderLine) {
            $orders[] = new CreateOrderLine($orderLine);
        }

        $this->batch()?->add($orders);
    }
}
`}
          </CodePane>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Batch Hydration 🚰</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox className="scale-75">
          <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
            {`
<?php

namespace Tests\\Feature;

use App\\Jobs\\CreateOrderJob;
use App\\Jobs\\CreateOrderLine;
use Illuminate\\Http\\UploadedFile;
use League\\Csv\\Writer;
use Tests\\TestCase;

class CreateOrdersJobTest extends TestCase
{
    public function test_order_lines_are_added_to_batch(): void
    {
        // Create a fake uploaded file with 3 order lines
        new UploadedFile(...$parameters);

        [$job, $batch] = (new CreateOrderJob($uploadedFile))->withFakeBatch();

        $job->handle();

        $this->assertTrue(collect($batch->added)->every(fn ($job) => $job instanceof CreateOrderLine));

        $this->assertEquals(3, $batch->totalJobs);
    }
}
`}
          </CodePane>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Jobs;

use App\\Models\\Order;
use Illuminate\\Bus\\Batchable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Queue\\Queueable;

class CreateOrderLine implements ShouldQueue
{
    use Batchable;
    use Queueable;

    public function __construct(private readonly array $orderLine) {}

    public function handle(): void
    {
        Order::firstOrCreate(['order_number' => $this->orderLine['order_number']])
            ->sandwiches()
            ->create();
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>More orders, more problems?</SlideLayout.Section>
      <SlideLayout.Center>
        <FlexBox>
          <img
            className="w-128"
            loading="lazy"
            src="./images/eat-mcr.png"
            alt="Eat MCR"
          />
        </FlexBox>
        <Heading>Congrats, you went viral.</Heading>
      </SlideLayout.Center>
      <SlideLayout.Section>Hear that? 👂</SlideLayout.Section>
      <SlideLayout.Center>
        <Heading>Database is calling ☎️</Heading>
        <Appear>
          <Heading>
            <i>Deadlocks.</i>😢
          </Heading>
        </Appear>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
protected function updateAtomicValues(string $batchId, Closure $callback)
{
    return $this->connection->transaction(function () use ($batchId, $callback) {
        $batch = $this->connection->table($this->table)->where('id', $batchId)
            ->lockForUpdate()
            ->first();

        return is_null($batch) ? [] : tap($callback($batch), function ($values) use ($batchId) {
            $this->connection->table($this->table)->where('id', $batchId)->update($values);
        });
    });
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>Scaling writes is hard.</SlideLayout.Section>
      <SlideLayout.Section>If only there was another way.</SlideLayout.Section>
      <SlideLayout.Section>DynamoDB. 🎉</SlideLayout.Section>
      <SlideLayout.Section>Silver bullet?</SlideLayout.Section>
      <SlideLayout.Section>More jobs, more failures?</SlideLayout.Section>
      <SlideLayout.Quote attribution="Insert your error monitoring service here">
        <div className="text-4xl">
          Throughput exceeds the current capacity of your table or index.
          DynamoDB is automatically scaling your table or index so please try
          again shortly.
        </div>
      </SlideLayout.Quote>
      <SlideLayout.Center>
        <Heading>Fail successfully!</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
public function handle(SandwichService $sandwichService)
{
    try {
        $sandwichService->make($this->sandwich);
    } catch (OutOfMayonnaiseException $outOfMayonnaiseException) {
        $this->sandwich->update([
            'failed_at' => now()
        ]);
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Section>More sandwiches, more problems?</SlideLayout.Section>
      <SlideLayout.Section>Hear that? 👂</SlideLayout.Section>
      <SlideLayout.Center>
        <Heading>Server is calling ☎️</Heading>
        <Appear>
          <Heading>
            <i>Out of memory.</i>😢
          </Heading>
        </Appear>
      </SlideLayout.Center>
      <Slide>
        <div>
          <div className="mx-auto max-w-7xl">
            <div className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-[#C5001A]">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-2xl font-semibold text-white sm:pl-0"
                            >
                              Method
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-2xl font-semibold text-white"
                            >
                              PHP function
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-2xl font-semibold text-white"
                            >
                              Memory efficent
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-2xl font-medium text-[#FDF6F6] sm:pl-0">
                              get
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              fetchAll
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              ❌
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-2xl font-medium text-[#FDF6F6] sm:pl-0">
                              chunk
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              fetchAll
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              ✅
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-2xl font-medium text-[#FDF6F6] sm:pl-0">
                              cursor
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              fetch
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              ✅
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-2xl font-medium text-[#FDF6F6] sm:pl-0">
                              lazy
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              fetch + generators
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-2xl">
                              ✅
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <Heading>Cursor?</Heading>
          <div className="text-2xl">Shout out Peter 📣</div>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Cursor + Job Batches</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox className="scale-75">
          <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
            {`
<?php

namespace App\\Jobs;

use App\\Models\\Order;
use App\\Models\\Sandwich;
use Illuminate\\Bus\\Batchable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Queue\\Queueable;
use Illuminate\\Support\\LazyCollection;

class MakeOrder implements ShouldQueue
{
    use Batchable;
    use Queueable;

    public function __construct(private readonly Order $order) {}

    public function handle(): void
    {
        $this->order
            ->sandwiches()
            ->cursor()
            ->map(fn (Sandwich $sandwich) => new CreateSandwich($sandwich))
            ->chunk(1000)
            ->each(function (LazyCollection $sandwiches) {
                $this->batch()?->add($sandwiches);
            });
    }
}
`}
          </CodePane>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Section>Order Tracking 🔍</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
<?php

namespace App\\Http\\Controllers;

use App\\Models\\Order;
use Illuminate\\Support\\Facades\\Bus;
use Inertia\\Inertia;
use Inertia\\Response;

class OrderController extends Controller
{
    public function show(Order $order): Response
    {
        return Inertia::render('Order/Show', [
            'order' => $order->only(['id', 'order_number']),
            'batch' => Bus::findBatch($order->batch_id),
        ]);
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox flexDirection="column" className="space-y-4 scale-80">
          <CodePane showLineNumbers={false} language="tsx" theme={nightOwl}>
            {`
import { usePoll } from "@inertiajs/react";

type ShowProps = {
  order: Order;
  batch: Batch | null;
};

export default function Show(props: ShowProps) {
  usePoll(2000, {
    only: ["batch"],
  });

  if(!batch) {
    return null;
  }

  return (
    <progress max={props.batch.total} value={props.batch.progress}>
      {props.batch.progress}%
    </progress>
  );
}
`}
          </CodePane>
          <progress
            max={100}
            value={70}
            className="[&::-webkit-progress-value]:bg-[#C5001A] [&::-webkit-progress-value]:rounded [&::-webkit-progress-bar]:bg-[#FDF6F6] [&::-webkit-progress-bar]:rounded"
          >
            70%
          </progress>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Section>Events?</SlideLayout.Section>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
public function receive(Collection $files): Batch
{
    return Bus::batch($files->map(fn (UploadedFile $file) => new CreateOrderJob($file)))
        ->name('Create Orders')
        ->then(function () {
            // All jobs have completed successfully
        })
        ->catch(function () {
            // One of the jobs has failed
        })
        ->finally(function () {
            // Everything has been completed
        })
        ->allowFailures()
        ->dispatch();
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
          {`
public function receive(Collection $files): Batch
{
    return Bus::batch($files->map(fn (UploadedFile $file) => new CreateOrderJob($file)))
        ->name('Create Orders')
        ->then(function (Batch $batch) {
            OrderCompleted::dispatch(Order::where('batch_id', $batch->id)->firstOrFail());
        })
        ->catch(function (Batch $batch) {
            OrderFailed::dispatch(Order::where('batch_id', $batch->id)->firstOrFail());
        })
        ->allowFailures()
        ->dispatch();
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <FlexBox className="scale-75">
          <CodePane showLineNumbers={false} language="php" theme={nightOwl}>
            {`
<?php

namespace App\\Listeners;

use App\\Events\\DeliveryPreparationCompleted;
use App\\Events\\DeliveryPreparationFailed;
use App\\Events\\OrderCompleted;
use App\\Jobs\\CreateInvoiceLinesBatch;
use App\\Jobs\\PrepareCutleryBatch;
use App\\Jobs\\PrintBarcodesBatch;
use Illuminate\\Support\\Facades\\Bus;

class PrepareForDelivery
{
    public function handle(OrderCompleted $event): void
    {
        Bus::batch([
            new PrintBarcodesBatch($event->order),
            new CreateInvoiceLinesBatch($event->order),
            new PrepareCutleryBatch($event->order),
        ])
            ->name("Delivery preparation for order: {$event->order->order_number}")
            ->then(function () use ($event) {
                DeliveryPreparationCompleted::dispatch($event->order);
            })
            ->catch(function () use ($event) {
                DeliveryPreparationFailed::dispatch($event->order);
            })
            ->dispatch();
    }
}
`}
          </CodePane>
        </FlexBox>
      </SlideLayout.Center>
      <SlideLayout.Section>Fan in. Fan Out.</SlideLayout.Section>
      <SlideLayout.Center>
        <img
          loading="lazy"
          src="./images/fan-in-fan-out.png"
          alt="Fan in, fan out."
          className="invert scale-150"
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Extract. Transform. Load.</Heading>
      </SlideLayout.Center>
      <SlideLayout.Section>Dig in.</SlideLayout.Section>
      <SlideLayout.Section>Sandwiches are relatable. 🥪</SlideLayout.Section>
      <SlideLayout.Center>
        <FlexBox flexDirection="column">
          <Heading>@ev_burrell</Heading>
          <img
            loading="lazy"
            src="./images/linkedin.png"
            alt="Linkedin"
            className="scale-75"
          />
        </FlexBox>
      </SlideLayout.Center>
    </Deck>
  );
};

createRoot(document.getElementById("app")!).render(<Presentation />);
